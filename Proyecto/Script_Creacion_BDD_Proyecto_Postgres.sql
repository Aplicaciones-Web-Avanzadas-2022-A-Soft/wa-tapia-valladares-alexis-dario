/*==============================================================*/
/* DBMS name:      PostgreSQL 8                                 */
/* Created on:     20/07/2022 23:22:36                          */
/*==============================================================*/


drop index NECESITA_FK;

drop index REALIZA_FK;

drop index COMPRA_PK;

drop table COMPRA;

drop index CREA2_FK;

drop index CUENTA_PK;

drop table CUENTA;

drop index HABILITA_FK;

drop index POSEE_FK;

drop index ENSENA_FK;

drop index CURSO_PK;

drop table CURSO;

drop index NECESITA2_FK;

drop index DETALLE_PK;

drop table DETALLE;

drop index INSTRUCTOR_PK;

drop table INSTRUCTOR;

drop index TIENE_FK;

drop index MODULOS_PK;

drop table MODULOS;

drop index CREA_FK;

drop index USUARIO_PK;

drop table USUARIO;

/*==============================================================*/
/* Table: COMPRA                                                */
/*==============================================================*/
create table COMPRA (
   ID_TIENDA            INT4                 not null,
   IDCUENTA             INT4                 null,
   ID_DETALLE           INT4                 null,
   ID_CUENTA            INT4                 null,
   FECHA                DATE                 null,
   METODO_PAGOI         CHAR(50)             null,
   constraint PK_COMPRA primary key (ID_TIENDA)
);

/*==============================================================*/
/* Index: COMPRA_PK                                             */
/*==============================================================*/
create unique index COMPRA_PK on COMPRA (
ID_TIENDA
);

/*==============================================================*/
/* Index: REALIZA_FK                                            */
/*==============================================================*/
create  index REALIZA_FK on COMPRA (
IDCUENTA
);

/*==============================================================*/
/* Index: NECESITA_FK                                           */
/*==============================================================*/
create  index NECESITA_FK on COMPRA (
ID_DETALLE
);

/*==============================================================*/
/* Table: CUENTA                                                */
/*==============================================================*/
create table CUENTA (
   IDCUENTA             INT4                 not null,
   IDUSUARIO            INT4                 null,
   USERNARME            CHAR(50)             null,
   APELLIDO             CHAR(50)             null,
   constraint PK_CUENTA primary key (IDCUENTA)
);

/*==============================================================*/
/* Index: CUENTA_PK                                             */
/*==============================================================*/
create unique index CUENTA_PK on CUENTA (
IDCUENTA
);

/*==============================================================*/
/* Index: CREA2_FK                                              */
/*==============================================================*/
create  index CREA2_FK on CUENTA (
IDUSUARIO
);

/*==============================================================*/
/* Table: CURSO                                                 */
/*==============================================================*/
create table CURSO (
   IDCURSO              INT4                 not null,
   IDCUENTA             INT4                 null,
   IDINSTRUCTOR         INT4                 null,
   ID_TIENDA            INT4                 null,
   TEMA                 CHAR(50)             null,
   INSTRUCTOR           CHAR(50)             null,
   DESCRIPCION          CHAR(50)             null,
   PRECIO               FLOAT3               null,
   RANKIG               INT4                 null,
   constraint PK_CURSO primary key (IDCURSO)
);

/*==============================================================*/
/* Index: CURSO_PK                                              */
/*==============================================================*/
create unique index CURSO_PK on CURSO (
IDCURSO
);

/*==============================================================*/
/* Index: ENSENA_FK                                             */
/*==============================================================*/
create  index ENSENA_FK on CURSO (
IDINSTRUCTOR
);

/*==============================================================*/
/* Index: POSEE_FK                                              */
/*==============================================================*/
create  index POSEE_FK on CURSO (
IDCUENTA
);

/*==============================================================*/
/* Index: HABILITA_FK                                           */
/*==============================================================*/
create  index HABILITA_FK on CURSO (
ID_TIENDA
);

/*==============================================================*/
/* Table: DETALLE                                               */
/*==============================================================*/
create table DETALLE (
   ID_DETALLE           INT4                 not null,
   ID_TIENDA            INT4                 null,
   CANTIDAD_CURSOS      INT4                 null,
   COSTO_UNITARIO       FLOAT8               null,
   IVA                  FLOAT8               null,
   METODO_PAGOI         CHAR(50)             null,
   constraint PK_DETALLE primary key (ID_DETALLE)
);

/*==============================================================*/
/* Index: DETALLE_PK                                            */
/*==============================================================*/
create unique index DETALLE_PK on DETALLE (
ID_DETALLE
);

/*==============================================================*/
/* Index: NECESITA2_FK                                          */
/*==============================================================*/
create  index NECESITA2_FK on DETALLE (
ID_TIENDA
);

/*==============================================================*/
/* Table: INSTRUCTOR                                            */
/*==============================================================*/
create table INSTRUCTOR (
   IDINSTRUCTOR         INT4                 not null,
   NOMBRE               CHAR(50)             null,
   APELLIDO             CHAR(50)             null,
   CORREO               CHAR(50)             null,
   HOBBYS               CHAR(200)            null,
   PERFILACADEMICO      CHAR(200)            null,
   constraint PK_INSTRUCTOR primary key (IDINSTRUCTOR)
);

/*==============================================================*/
/* Index: INSTRUCTOR_PK                                         */
/*==============================================================*/
create unique index INSTRUCTOR_PK on INSTRUCTOR (
IDINSTRUCTOR
);

/*==============================================================*/
/* Table: MODULOS                                               */
/*==============================================================*/
create table MODULOS (
   IDMODULO             INT4                 not null,
   IDCURSO              INT4                 null,
   NOMBREMODULO         CHAR(50)             null,
   DIFICULTAD           CHAR(50)             null,
   DESCRIPCION          CHAR(50)             null,
   RANKIG               INT4                 null,
   constraint PK_MODULOS primary key (IDMODULO)
);

/*==============================================================*/
/* Index: MODULOS_PK                                            */
/*==============================================================*/
create unique index MODULOS_PK on MODULOS (
IDMODULO
);

/*==============================================================*/
/* Index: TIENE_FK                                              */
/*==============================================================*/
create  index TIENE_FK on MODULOS (
IDCURSO
);

/*==============================================================*/
/* Table: USUARIO                                               */
/*==============================================================*/
create table USUARIO (
   IDUSUARIO            INT4                 not null,
   IDCUENTA             INT4                 null,
   NOMBRE               CHAR(50)             null,
   APELLIDO             CHAR(50)             null,
   CORREO               CHAR(50)             null,
   EDAD                 INT4                 null,
   GENERO               CHAR(50)             null,
   constraint PK_USUARIO primary key (IDUSUARIO)
);

/*==============================================================*/
/* Index: USUARIO_PK                                            */
/*==============================================================*/
create unique index USUARIO_PK on USUARIO (
IDUSUARIO
);

/*==============================================================*/
/* Index: CREA_FK                                               */
/*==============================================================*/
create  index CREA_FK on USUARIO (
IDCUENTA
);

alter table COMPRA
   add constraint FK_COMPRA_NECESITA_DETALLE foreign key (ID_DETALLE)
      references DETALLE (ID_DETALLE)
      on delete restrict on update restrict;

alter table COMPRA
   add constraint FK_COMPRA_REALIZA_CUENTA foreign key (IDCUENTA)
      references CUENTA (IDCUENTA)
      on delete restrict on update restrict;

alter table CUENTA
   add constraint FK_CUENTA_CREA2_USUARIO foreign key (IDUSUARIO)
      references USUARIO (IDUSUARIO)
      on delete restrict on update restrict;

alter table CURSO
   add constraint FK_CURSO_ENSENA_INSTRUCT foreign key (IDINSTRUCTOR)
      references INSTRUCTOR (IDINSTRUCTOR)
      on delete restrict on update restrict;

alter table CURSO
   add constraint FK_CURSO_HABILITA_COMPRA foreign key (ID_TIENDA)
      references COMPRA (ID_TIENDA)
      on delete restrict on update restrict;

alter table CURSO
   add constraint FK_CURSO_POSEE_CUENTA foreign key (IDCUENTA)
      references CUENTA (IDCUENTA)
      on delete restrict on update restrict;

alter table DETALLE
   add constraint FK_DETALLE_NECESITA2_COMPRA foreign key (ID_TIENDA)
      references COMPRA (ID_TIENDA)
      on delete restrict on update restrict;

alter table MODULOS
   add constraint FK_MODULOS_TIENE_CURSO foreign key (IDCURSO)
      references CURSO (IDCURSO)
      on delete restrict on update restrict;

alter table USUARIO
   add constraint FK_USUARIO_CREA_CUENTA foreign key (IDCUENTA)
      references CUENTA (IDCUENTA)
      on delete restrict on update restrict;

