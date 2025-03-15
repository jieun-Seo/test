const users = {
  1: { id: 1, name: '김철수', email: 'kim@test.com' },
  2: { id: 2, name: '이영희', email: 'lee@test.com' },
  3: { id: 3, name: '주옥이', email: 'ju@test.com' },
};
const posts = {
  1: [
    { id: 10, title: '첫 번째 글' },
    { id: 22, title: '두 번째 글' },
  ],
  2: [{ id: 31, title: '안녕하세요' }],
};
function getUserInfo(userID) {
  return new Promise((resolve, reject) => {
    if (users[userID]) {
      resolve(users[userID]);
    } else {
      reject('사용자를 찾을 수 없습니다.');
    }
  });
}
function getUserWriting(userID) {
  return new Promise((resolve, reject) => {
    if (posts[userID]) {
      resolve(posts[userID]);
    } else {
      reject('게시글을 찾을 수 없습니다.');
    }
  });
}
getUserInfo(1)
  .then((user) => {
    console.log(`사용자 정보 : ${user}`);
    console.log(user);
  })
  .catch((err) => {
    console.error(err);
  });
getUserWriting(1)
  .then((writing) => {
    console.log(`사용자의 게시글 : ${writing}`);
  })
  .catch((err) => {
    console.error(err);
  });
