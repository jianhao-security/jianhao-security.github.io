var posts=["2022/12/27/hello-world/","2023/05/12/CTF/青少年CTF-B2-PHP特性练习/","2023/08/07/vulnhub靶机/DC2/","2023/09/16/漏洞复现/VSFTPD 2.3.4 笑脸漏洞/","2023/07/15/漏洞复现/nginx-0.7.65_漏洞复现/","2023/08/01/vulnhub靶机/HACKADEMIC：RTB1/","2023/09/21/漏洞复现/phpstudy_2016-2018_rce 漏洞复现/","2023/08/16/漏洞复现/通达OA前台任意用户登录漏洞复现/","2023/03/18/疑难杂症/VMware打开靶机无法连接网络/"];function toRandomPost(){pjax.loadUrl('/'+posts[Math.floor(Math.random() * posts.length)]);};