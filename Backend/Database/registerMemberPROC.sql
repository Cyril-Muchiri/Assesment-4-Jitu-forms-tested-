CREATE OR ALTER PROCEDURE registerMemberPROC( @email VARCHAR(250) ,@pass VARCHAR(200), @userName VARCHAR(250),@cohort VARCHAR(200))
AS
BEGIN
    INSERT INTO membersTable(email,pass, userName,cohort) VALUES(@email,@pass, @userName,@cohort)
END
