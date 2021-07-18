import { useState } from "react";
import Input from "../components/common/Input";
import authService from "../services/authService";

const Login = (props) => {
  const [data, setData] = useState({
    username: '',
    password: '',
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
      await authService.login(data.username, data.password);
      window.location = '/product';
    } catch({response}) {
      setError(response.data.errors);
    }
  }

  return (
    <div className="card">
      <div className="card-header">Register Form</div>
      <div className="card-body">
        <form onSubmit={handleSumit}>
          <div className="mb-3">
            <label htmlFor="username" className="form-label">Username</label>
            <Input name="username" value={data.username} error={error} placeholder="insert username" onChange={handleChange} />
          </div>
          <div className="mb-3">
            <label htmlFor="password" className="form-label">Password</label>
            <Input type="password" name="password" value={data.password} error={error} placeholder="************" onChange={handleChange} />
          </div>
          <button type="submit" className="btn btn-primary">Submit</button>
        </form>
      </div>
    </div>
  );
}
 
export default Login;