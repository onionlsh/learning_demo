配置本地域名反向代理：
  本地：localhost:3000
  nginx代理后：xxx.xxx.com
  
1.在C:\Windows\System32\drivers\etc\hosts文件最后添加：
  127.0.0.1 xxx.xxx.com （你想要的域名）
  
2.配置nginx的nginx.conf配置文件
  server {
        listen   80;
        server_name  xxx.xxx.com;			
        #charset koi8-r;

        #access_log  logs/host.access.log  main;

        location / {
			     client_max_body_size 1024m;
           proxy_pass http://127.0.0.1:8080;
        }
   }

保存后重启nginx

注意：nginx不要放在有中文的目录下
