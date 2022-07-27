-- Table: public.asesores

-- DROP TABLE IF EXISTS public.asesores;


-- SEQUENCE: public.asesor_comercial_vendedor_id_seq

-- DROP SEQUENCE IF EXISTS public.asesor_comercial_vendedor_id_seq;

CREATE SEQUENCE IF NOT EXISTS public.asesor_comercial_vendedor_id_seq
    INCREMENT 1
    START 1
    MINVALUE 1
    MAXVALUE 2147483647
    CACHE 1
    OWNED BY asesores.vendedor_id;

ALTER SEQUENCE public.asesor_comercial_vendedor_id_seq
    OWNER TO postgres;



CREATE TABLE IF NOT EXISTS public.asesores
(
    vendedor_id integer NOT NULL DEFAULT nextval('asesor_comercial_vendedor_id_seq'::regclass),
    nombre character varying COLLATE pg_catalog."default",
    telefono character varying COLLATE pg_catalog."default",
    correo character varying COLLATE pg_catalog."default",
    created timestamp with time zone,
    updated timestamp with time zone,
    enable boolean,
    equipo_ventas_id integer,
    CONSTRAINT asesor_comercial_pkey PRIMARY KEY (vendedor_id),
    CONSTRAINT fk_equipo FOREIGN KEY (equipo_ventas_id)
        REFERENCES public.equipos (equipo_ventas_id) MATCH SIMPLE
        ON UPDATE NO ACTION
        ON DELETE NO ACTION
        NOT VALID
)

TABLESPACE pg_default;

ALTER TABLE IF EXISTS public.asesores
    OWNER to postgres;