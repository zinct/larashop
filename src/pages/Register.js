import { useState } from "react";
import Input from "../components/common/Input";
import authService from "../services/authService";
import toastService from "../services/toastService";

const Register = (props) => {
  const [data, setData] = useState({
    name: '',
    username: '',
    password: '',
    password_confirmation: '',
  });

  const [error, setError] = useState();

  function handleChange({ target }) {
    const newData = {...data};
    newData[target.name] = target.value;
    setData(newData);
  }

  async function handleSumit(e) {
    e.preventDefault();

    try {

      const { data: resData } = await authService.register(data);
      if(resData.code === 200) {
        resetForm();
        toastService.success('Register has successfully.');
        localStorage.setItem('token', resData.data.token);
        window.location = '/product';
      }

    } catch({ response }) {
      setError(response.data.errors);
    }
  }

  function resetForm() {
    setData({
      name: '',
      username: '',
      password: '',
      password_confirmation: '',
    });
  }

  return (
    <div className="card">
      <div className="card-header">Register Form</div>
      <div className="card-body">
        <form onSubmit={handleSumit}>
          <div className="mb-3">
            <label htmlFor="username" className="form-label">Name</label>
            <Input name="name" value={data.name} error={error} placeholder="insert name" onChange={handleChange} />
          </div>
          <div className="mb-3">
            <label htmlFor="username" className="form-label">Username</label>
            <Input name="username" value={data.username} error={error} placeholder="insert username" onChange={handleChange} />
          </div>
          <div className="mb-3">
            <label htmlFor="password" className="form-label">Password</label>
            <Input type="password" name="password" value={data.password} error={error} placeholder="************" onChange={handleChange} />
          </div>
          <div className="mb-3">
            <label htmlFor="password_confirmation" className="form-label">Password Confirmation</label>
            <Input type="password" name="password_confirmation" value={data.password_confirmation} error={error} placeholder="************" onChange={handleChange} />
          </div>
          <button type="submit" className="btn btn-primary">Submit</button>
        </form>
      </div>
    </div>
  );
}
 
export default Register;