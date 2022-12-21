`docker exec -it CONTAINER_(ID|NAME) bash` - зайти в контейнер

---

##### команды docker-compose основываются на docker-compose.yml файле
##### то есть управляет сервисами, обычно состоящими из нескольких контейнеров

1. `docker-compose up -d` - запуск (флаг -d фоновый режим)
1. `docker-compose down` - остановка
1. `docker-compose restart` - перезапуск
1. `docker-compose down && docker-compose up -d && docker ps` - остановка/запуск/отобразить список
1. `docker-compose build && docker rmi $(docker images -f "dangling=true" -q)` - пересобрать контейнер и удалить все висячие образы

---

1. `docker images` - список образов
1. `docker container ls --all` - список контейнеров
1. `docker network ls` - список сетей

---

1. `docker container rm $(docker container ls -aq)` - удалить все неиспользуемые контейнеры
1. `docker rm CONTAINER_(ID|NAME)` - удалить контейнер
1. `docker rmi -f IMAGE_(ID|NAME)` - удалить образ со всеми зависимостями

---

1. `docker ps` - показать все запущеные контейнеры
1. `docker ps -aq` - только их id
1. `docker stop $(docker ps -aq)` - остановить все запущеные контейнеры

---

1. `docker logs CONTAINER_(ID|NAME)` - логи контейнера, в случае если он запущен
