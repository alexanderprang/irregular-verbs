 docker build -t irregular-verbs-website .
 docker stop irregular-verbs-website
 docker rm irregular-verbs-website
 docker run -d -p 80:80 --name irregular-verbs-website irregular-verbs-website 
