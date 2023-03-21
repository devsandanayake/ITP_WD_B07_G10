import axios from'axios';

export const register =  async newUser => {
    const res = await axios
        .post('http://localhost:8070/register', {
            first_name: newUser.first_name,
            last_name: newUser.last_name,
            email: newUser.email,
            password: newUser.password
        });
    console.log("Registered");
    window.alert("Registered");
    
}

export const login =  async user => {
      try {
        const res = await axios
            .post('http://localhost:8070/login', {
                email: user.email,
                password: user.password
            });
        localStorage.setItem('usertoken', res.data);
        return res.data;
    } catch (err) {
        console.log(err);
    }
    
}