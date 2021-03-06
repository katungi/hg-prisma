# Migration `20201114220315-init`

This migration has been generated by ruheni at 11/15/2020, 1:03:15 AM.
You can check out the [state of the schema](./schema.prisma) after the migration.

## Database Steps

```sql
CREATE TABLE "Experience" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "price" TEXT NOT NULL,
    "date" TIMESTAMP(3) NOT NULL,

    PRIMARY KEY ("id")
)

CREATE TABLE "Category" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "description" TEXT NOT NULL,

    PRIMARY KEY ("id")
)

CREATE TABLE "_CategoryToExperience" (
    "A" TEXT NOT NULL,
    "B" TEXT NOT NULL
)

CREATE UNIQUE INDEX "_CategoryToExperience_AB_unique" ON "_CategoryToExperience"("A", "B")

CREATE INDEX "_CategoryToExperience_B_index" ON "_CategoryToExperience"("B")

ALTER TABLE "_CategoryToExperience" ADD FOREIGN KEY("A")REFERENCES "Category"("id") ON DELETE CASCADE ON UPDATE CASCADE

ALTER TABLE "_CategoryToExperience" ADD FOREIGN KEY("B")REFERENCES "Experience"("id") ON DELETE CASCADE ON UPDATE CASCADE
```

## Changes

```diff
diff --git schema.prisma schema.prisma
migration ..20201114220315-init
--- datamodel.dml
+++ datamodel.dml
@@ -1,0 +1,27 @@
+// This is your Prisma schema file,
+// learn more about it in the docs: https://pris.ly/d/prisma-schema
+
+datasource db {
+  provider = "postgresql"
+  url = "***"
+}
+
+generator client {
+  provider = "prisma-client-js"
+}
+
+model Experience {
+  id          String     @id @default(uuid())
+  name        String
+  description String
+  price       String
+  date        DateTime
+  categories  Category[]
+}
+
+model Category {
+  id          String       @id @default(uuid())
+  name        String
+  description String
+  experiences Experience[]
+}
```


