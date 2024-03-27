const numbers = [1, 2, 3, 4, 5];

const numberList = numbers.map((number, index) => (
  <li key={index}>{number}</li>
));

const userInfo = [
  {
    id: 1,
    userName: "Arpita",
    email: "arpita@gmail.com",
    address: "Greencity"
  },

  {
    id: 2,
    userName: "Broti",
    email: "broti@gmail.com",
    address: "Greencity"
  },

  {
    id: 3,
    userName: "Progga",
    email: "progga@gmail.com",
    address: "Taltola"
  }
]

const userList = userInfo.map((user)=>(
  <ul key={user.id}>
    <li>{user.id}</li>
    <li>{user.userName}</li>
    <li>{user.email}</li>
    <li>{user.address}</li>
  </ul>
))

const ListMap = () => {
  return (
    <>
      {numberList}
      {userList}
    </>
  );
};

export default ListMap;
