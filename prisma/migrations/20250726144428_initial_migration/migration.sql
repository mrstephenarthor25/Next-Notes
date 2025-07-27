-- CreateTable
CREATE TABLE "Notes" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "title" TEXT NOT NULL,
    "slug" TEXT NOT NULL,
    "Published" BOOLEAN NOT NULL DEFAULT false,
    "content" TEXT NOT NULL
);
