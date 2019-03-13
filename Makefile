dev:
	npm run dev

default:
	npm install

test:
	npm test

update.tests: 
	npm test -- -u

cov: 
	npm run coverage