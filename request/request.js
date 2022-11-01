export class Request {
  constructor(url) {
    this.url = url;
  }

  async createNewCofession(day, date, time, title, yourConfession, name) {
    try {
      const res = await fetch(this.url, {
        method: "POST",
        body: JSON.stringify({
          user: name,
          day,
          date,
          time,
          editHistory: [],
          starred: false,
          title,
          yourConfession,
        }),
        headers: {
          "Content-Type": "application/json",
        },
      });
      await res.json();
    } catch (error) {
      console.error(error.message);
    }
  }
}
