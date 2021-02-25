CREATE TABLE "gp_appointment_data" (
    "bookingID" NUMERIC(8),
    "bookingDate" TEXT,
    "doctorID" NUMERIC(8),
    "doctorName"TEXT,
    "patientID" NUMERIC(8),
    "patientName" TEXT,
    "clinicID" NUMERIC(8),
    "clinicName" TEXT
);
INSERT INTO "gp_appointment_data" VALUES
    (10000001,'Dec 04, 2019',20000001,'Vincent Ren',30000001,'Cherry Zhong',40000001,'North Melbourne Clinic'),
    (10000002,'Dec 04, 2020',20000001,'Vincent Ren',30000002,'Zanny Wang',40000001,'North Melbourne Clinic'),
    (10000003,'Nov 07, 2021',20000002,'Feiyi Ren',30000003,'Gulu',40000002,'South Melbourne Clinic'),
    (10000004,'Nov 06, 2020',20000002,'Feiyi Ren',30000001,'Cherry Zhong',40000002,'South Melbourne Clinic');
