install:
		npm ci

lint:
		npx eslint .

make test:
		npm test

test-coverage:
		npm test -- --coverage
