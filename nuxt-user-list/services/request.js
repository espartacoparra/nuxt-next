class Request {
  api = "https://reqres.in/api/";
  async getUsers(page) {
    let data = await (await fetch(this.api + "users?page=" + page)).json();
    return data;
  }
  async getUser(id) {
    let data = await (await fetch(this.api + "users/" + id)).json();
    return data;
  }
  async getComments() {
    let data = await (
      await fetch("https://jsonplaceholder.typicode.com/comments")
    ).json();
    return data;
  }
}

export default new Request();
