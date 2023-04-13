import axios from'axios';

export const adminregister =  async newAdmin => {
    const res = await axios
        .post('http://localhost:8070/admin/register', {
            name: newAdmin.name,
            email: newAdmin.email,
            password: newAdmin.password
        });
    console.log("Registered");
    window.alert("Registered");
    
}

export const adminlogin =  async admin => {
      try {
        const res = await axios
            .post('http://localhost:8070/admin/login', {
                email: admin.email,
                password: admin.password
            });
        localStorage.setItem('admintoken', res.data);
        return res.data;
    } catch (err) {
        console.log(err);
    }
     
    
}