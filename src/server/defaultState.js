import md5 from "md5";
export const defaultState = {
  // session: {
  //   authenticated: false
  // },

  organizers: [
    {
      id: "U01",
      name: "Danny",
      passwordHash: md5("123j")
    }
  ],
  category: [
    {
      name: "In-House",
      id: "G01"
    },
    {
      name: "Out-sourced",
      id: "G02"
    }
  ],
  status: [
    {
      name: "To-Do",
      id: "S01",
      owner: "U01"
    },
    {
      name: "In-Progress",
      id: "S02",
      owner: "U01"
    },
    {
      name: "Done",
      id: "S03",
      owner: "U01"
    }
  ],
  tasks: [
    {
      name: "Handle Invitations",
      id: "T01",
      owner: "U01",
      status: "S02",
      category: "G01"
    },
    {
      name: "Venue Prep",
      id: "T02",
      owner: "U01",
      status: "S01",
      category: "G02"
    },
    {
      name: "Entertainment Bookings",
      id: "T03",
      owner: "U01",
      status: "S02",
      category: "G02"
    },
    {
      name: "Order Drinks",
      id: "T04",
      owner: "U01",
      status: "S03",
      category: "G01"
    },
    {
      name: "Book Catering",
      id: "T05",
      owner: "U01",
      status: "S02",
      category: "G01"
    },
    {
      name: "Arrange Souvenirs",
      id: "T06",
      owner: "U01",
      status: "S01",
      category: "G02"
    }
  ],
  comments: [
    {
      owner: "U01",
      id: "C1",
      task: "T04",
      content: "Awaiting sign-off"
    },
    {
      owner: "U01",
      id: "C2",
      task: "T06",
      content: "Bid invitation posted."
    }
  ]
};
