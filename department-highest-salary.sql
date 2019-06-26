# Write your MySQL query statement below
select d.name as Department, e.name as Employee, e.Salary   
  from employee e
 inner join department d on d.id = e.departmentid
 where salary = (select max(e2.salary) from employee e2 where e2.departmentid = e.departmentid)