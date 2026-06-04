-- ═══════════════════════════════════════════
-- KEVCA Security Protection — Supabase Schema
-- ═══════════════════════════════════════════

-- Contactos / leads del formulario web
CREATE TABLE IF NOT EXISTS leads (
  id         UUID        DEFAULT gen_random_uuid() PRIMARY KEY,
  nombre     TEXT        NOT NULL,
  telefono   TEXT        NOT NULL,
  email      TEXT,
  servicio   TEXT,
  mensaje    TEXT,
  created_at TIMESTAMPTZ DEFAULT NOW()
);

-- Servicios que ofrece la empresa
CREATE TABLE IF NOT EXISTS servicios (
  id          UUID        DEFAULT gen_random_uuid() PRIMARY KEY,
  titulo      TEXT        NOT NULL,
  descripcion TEXT        NOT NULL,
  icono       TEXT        NOT NULL,  -- 'alarm' | 'camera' | 'fence' | 'sensor'
  orden       INTEGER     DEFAULT 0,
  activo      BOOLEAN     DEFAULT TRUE,
  created_at  TIMESTAMPTZ DEFAULT NOW()
);

-- Paquetes / planes con precios
CREATE TABLE IF NOT EXISTS paquetes (
  id              UUID        DEFAULT gen_random_uuid() PRIMARY KEY,
  nombre          TEXT        NOT NULL,
  descripcion     TEXT,
  precio          NUMERIC(10,2),
  moneda          TEXT        DEFAULT 'CRC',
  caracteristicas TEXT[]      DEFAULT '{}',
  popular         BOOLEAN     DEFAULT FALSE,
  activo          BOOLEAN     DEFAULT TRUE,
  orden           INTEGER     DEFAULT 0,
  created_at      TIMESTAMPTZ DEFAULT NOW()
);

-- ─── Datos iniciales ───────────────────────────────────────────────────────────
INSERT INTO servicios (titulo, descripcion, icono, orden) VALUES
  ('Alarmas',          'Sistemas de alarma inteligentes para hogares y negocios con monitoreo en tiempo real y notificaciones instantáneas.',        'alarm',  1),
  ('Cámaras CCTV',     'Videovigilancia de alta definición con grabación continua, visión nocturna y acceso remoto desde su celular.',               'camera', 2),
  ('Cercas Eléctricas','Cercos eléctricos y perimetrales de alta tensión con detección de intrusión y alertas automáticas.',                         'fence',  3),
  ('Sensores',         'Sensores de movimiento, humo, apertura y vibración. Detección temprana de amenazas para su tranquilidad.',                   'sensor', 4)
ON CONFLICT DO NOTHING;
