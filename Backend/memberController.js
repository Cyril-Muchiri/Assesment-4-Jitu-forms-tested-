const mssql = require('mssql')
const dotenv = require ('dotenv')


const registerMember = async (req, res)=>{
    try {    
    const pool = await mssql.connect(sqlConfig);

        const result = await pool.request()
        .input('e_name', mssql.VarChar, e_name)
        .input('email', mssql.VarChar, email)
        .input('password', mssql.VarChar, hashedPwd)
        .execute('registerMemberPROC')

        console.log(result);

        if (result.rowsAffected == 1){
            return res.status(200).json({
                message: 'Member registered successfully'
            })
        }else{
            return res.status(200).json({
                message: 'Member registration failed'
            })
        }


    } catch (error) {
        return res.json({Error:error})
    }
}

module.exports = {
    registerMember,
    
}
