select * from students
select Name from students 
select * from students where Age > 30 
select * from students where Age = 30 AND Gender = 'F' 
select points from students where Name='Alex'
insert into students(ID,Name,Age,Gender,Points) values ( '8' , 'Malak' , '21' , 'F' , '500')
Update students set points=450 where Name='Basma'
Update students set points = points - 30 where Name = 'Alex'

