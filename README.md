
# BikeZen
A book about bikes in Farsi, you can find the actual book at [BikeZen.ir](http://bikezen.ir)



# Install and run the project for development purpose 

### Prerequisites

```
python3 -m pip install pelican markdown
```

### Run development server

```
./develop_server.sh start
```

### Restart development server

```
./develop_server.sh restart
```

### Stop development server

```
./develop_server.sh stop
```


<div dir="rtl">

## راهنمای دوچرخه‌ی جادی
یک کتاب درباره دوچرخه به زبان فارسی.\
می‌توانید کتاب را در اینجا آنلاین بخوانید: [BikeZen.ir](https://bikezen.ir/)

# راهنمای نصب برای توسعه دهندگان  
  
## نیازمندی‌ها
* [پایتون](https://www.python.org/) نسخه 3 به بالا
* پروژه [پلیکان](https://getpelican.com/)

##  نصب

* پایتون را از [سایتش](https://www.python.org/) دانلود و نصب می‌کنیم.
* دستورات زیر را به ترتیب وارد می‌کنیم:
</div><div dir="ltr">

```
git clone https://github.com/jadijadi/bikezenbook.git
cd bikezenbook
pip install pelican
pip install markdown
make html
make serve
```
</div><div dir="rtl">

* اکنون در دایرکتوری output محتوای سایت را داریم.
* همچنین در مرورگر وب از آدرس زیر می‌توان نسخه محلی آن را مشاهده کرد:
</div><div dir="ltr">

```
http://localhost:8000
```

</div>
