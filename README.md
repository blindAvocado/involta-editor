Чтобы запустить проект, пропишите следующие команды: <br />
`docker build -t involta-editor .`<br />
`docker run --rm --name involta-editor -d -p 1234:1234 involta-editor`<br />
<br />
Веб-приложение находится по адресу: `http://localhost:1234`<br />
<br />
Для остановки контейнера пропишите: <br />
`docker stop involta-editor`
