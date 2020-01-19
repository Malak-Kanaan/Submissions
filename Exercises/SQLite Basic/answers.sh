select * from students
select Name from students 
select * from students where Age > 30 
select * from students where Age = 30 AND Gender = 'F' 
select points from students where Name='Alex'
insert into students(ID,Name,Age,Gender,Points) values ( '8' , 'Malak' , '21' , 'F' , '500')
Update students set points=450 where Name='Basma'
Update students set points = points - 30 where Name = 'Alex'

create table graduates(
    ID INTEGER NOT NULL PRIMARY KEY autoincrement,
    Name TEXT NOT NULL UNIQUE,
    Age INTEGER,
    Gender TEXT,
    Points INTEGER,
    Graduation date
    );

insert into graduates('ID','Name','Age','Gender','Points') select * from students where Name='Layal'

update graduates set Graduation='12/10/2019' where Name='Layal'

delete  from students where Name='Layal'

select employees.Name,companies.Name,companies.Date from employees,companies;
select employees.Name,companies.Date from employees,companies where companies.date<2000;
select companies.Name,employees.Role  from companies,employees where employees.role="Graphic Designer";




