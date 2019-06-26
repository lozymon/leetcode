# Write your MySQL query statement below
select d.name as Department, e.name as Employee, e.Salary     
  from employee e
 inner join department d on d.id = e.departmentId
 where e.salary in (
        SELECT DISTINCT salary 
        FROM employee a 
        WHERE 3 >= (SELECT COUNT(DISTINCT salary) 
        FROM employee b 
        WHERE b.salary >= a.salary
          and b.DepartmentId = a.DepartmentId) 
        and a.DepartmentId = e.DepartmentId
ORDER BY a.salary DESC)
ORDER BY e.departmentId, e.Salary desc
