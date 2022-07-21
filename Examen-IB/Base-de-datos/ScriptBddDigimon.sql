/*==============================================================*/
/* DBMS name:      PostgreSQL 8                                 */
/* Created on:     16/07/2022 16:48:27                          */
/*==============================================================*/

/*==============================================================*/
/* Table: DIGIMON                                               */
/*==============================================================*/
create table DIGIMON (
   IDDIGIMON            INT4                 not null,
   IDELEGIDO            INT4                 null,
   NOMBRE               CHAR(50)             not null,
   NIVEL                CHAR(50)             not null,
   ATRIBUTO             CHAR(50)             not null,
   TIPO                 CHAR(50)             not null,
   IMAGEN               CHAR(100)            null,
   constraint PK_DIGIMON primary key (IDDIGIMON)
);

/*==============================================================*/
/* Index: DIGIMON_PK                                            */
/*==============================================================*/
create unique index DIGIMON_PK on DIGIMON (
IDDIGIMON
);

/*==============================================================*/
/* Index: POSEE_FK                                              */
/*==============================================================*/
create  index POSEE_FK on DIGIMON (
IDELEGIDO
);

/*==============================================================*/
/* Table: ELEGIDO                                               */
/*==============================================================*/
create table ELEGIDO (
   IDELEGIDO            INT4                 not null,
   NOMBRE               CHAR(50)             not null,
   APELLIDO             CHAR(50)             not null,
   SEXO                 CHAR(1)              not null,
   ESTATURA             FLOAT8               not null,
   TELEFONO             INT4                 not null,
   constraint PK_ELEGIDO primary key (IDELEGIDO)
);

/*==============================================================*/
/* Index: ELEGIDO_PK                                            */
/*==============================================================*/
create unique index ELEGIDO_PK on ELEGIDO (
IDELEGIDO
);

alter table DIGIMON
   add constraint FK_DIGIMON_POSEE_ELEGIDO foreign key (IDELEGIDO)
      references ELEGIDO (IDELEGIDO)
      on delete restrict on update restrict;

