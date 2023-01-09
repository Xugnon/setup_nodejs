Script para setup node

"Init"
git init
yarn init --y

"Added typescript and ts-node-dev"
add typescript, ts-node-dev -D
tsc --init

"Add path's"
add tsconfig-paths -D
add '-r tsconfig-paths/register' on scripts/dev

"Eslint download and configuration"
add -D eslint prettier eslint-config-prettier
npx eslint --init
create .prettierrc.json

"Jest"
add -D jest @types/jest ts-jest
