CREATE TABLE "plate_types" (
  "id" integer PRIMARY KEY,
  "letter" varchar NOT NULL,
  "created_at" date NOT NULL
);

CREATE TABLE "garages" (
  "id" integer PRIMARY KEY,
  "name" varchar NOT NULL,
  "address" varchar NOT NULL,
  "created_at" date NOT NULL
);

CREATE TABLE "car_plates" (
  "id" integer PRIMARY KEY,
  "plate_number" varchar NOT NULL,
  "plate_type_id" integer NOT NULL,
  "created_at" date NOT NULL
);

CREATE TABLE "orders" (
  "id" integer PRIMARY KEY,
  "date" date NOT NULL,
  "description" text NOT NULL,
  "status" varchar NOT NULL,
  "car_plate_id" integer NOT NULL,
  "garage_id" integer NOT NULL,
  "created_at" date NOT NULL
);

ALTER TABLE "car_plates" ADD FOREIGN KEY ("plate_type_id") REFERENCES "plate_types" ("id");

ALTER TABLE "orders" ADD FOREIGN KEY ("garage_id") REFERENCES "garages" ("id");

ALTER TABLE "orders" ADD FOREIGN KEY ("car_plate_id") REFERENCES "car_plates" ("id");
