# Free to play games app
  
## Инструкция по запуску приложения
- Склонировать репозиторий — ```git clone https://github.com/shadowfiendinmyheart/free-to-play.git```
- Установить зависимости — ```npm install```
- В корне приложения создать файл с названием ```.env``` и прописать туда следующую конструкцию: ```REACT_APP_FREE_TO_GAME_RAPID_API_KEY=your_rapid_api_key```, где ```your_rapid_api_key``` это Ваш ключ от rapidApi
- Запустить приложение — ```npm start```
  
## Запуск через Docker
- Повторить 1 и 3 шаг из предыдущей инструкции
- Создать image — ```docker build --tag 'free-to-play-image' .```
- Запустить контейнер — ```docker run -p 3001:3001```
  
## Deploy
- https://free-to-play-zeta.vercel.app/
