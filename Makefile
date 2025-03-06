install:
		npm ci

lint:
		npx eslint .

make jest:
		npx jest

test-coverage:
		npm test -- --coverage
