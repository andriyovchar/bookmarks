# bookmarks - Andrii Ovchar

## Development server - UI
Run `ng s` for a dev server. Navigate to `http://localhost:4200/`

## Set DB configs
See api\.env

## Development server - API
Run `npm run start:dev` to start API

## Init DB migration
Run `npm run typeorm:migration:generate -- InitDB` to initialize DB migration
                                                                 
## Run DB migration
Run `npm run typeorm:migration:run` to start API (you need PostgreSQL to be installed)

## Inset dummy data
INSERT INTO public."group"(
	name, id)
	VALUES ('work', 1);
INSERT INTO public."group"(
	name, id)
	VALUES ('leisure', 2);
INSERT INTO public."group"(
	name, id)
	VALUES ('personal', 3);
