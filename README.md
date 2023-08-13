# angular_responsive
WebApp Angular con menu responsive desktop/mobile, routing e preset layout pagina

# 0. Avvio
```
npx ng serve
```

# 1. Installazione
## 1.1 Angular
```
npm install @angular/cli
```
## 1.2 Nuovo progetto
Creo progetto angularMui (con Routing => Y)
```
npx ng new angularMui
```
## 1.3 Librerie
```
cd angularMui
```
### 1.3.1 Mui
```
npx ng add @angular/material
```

# 2. Componenti
```
cd angularMui
```
## 2.1 menu-burger
```
npx ng generate component menu-burger
```
## 2.2 pages
```
cd angularMui/app/src
mkdir pages
cd pages
```
### home
```
npx ng generate component home
```