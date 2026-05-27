import pool from "../config/db.js";

export const getAllUsersService = async()=>{
    
    const result = await pool.query("SELECT * FROM users");
    return result.rows;
}
export const getAllUsersByIdService = async(id)=>{
    const result = await pool.query("SELECT * FROM users where id = $1", [id]);
    return result.rows[0];
}

export const getUserByEmailService = async(email)=>{
    const result = await pool.query("SELECT * FROM users where email = $1", [email])

    return result.rows[0];
}
export const createUserService = async(name, email, hashedPassword)=>{
    const result = await pool.query(
        "INSERT into users (name, email, password) values ($1, $2, $3) returning *", [name, email, hashedPassword]);
    return result.rows[0];
}
export const updateUserService = async(id, name, email)=>{
    
    const result = await pool.query("UPDATE users set name = $1, email = $2 where id = $3 returning *", [name, email, id]);
    return result.rows[0];

}

export const deleteUserService = async(id)=>{
    const result = await pool.query("DELETE FROM users where id = $1 returning *", [id]);
    return result.rows[0];
}

