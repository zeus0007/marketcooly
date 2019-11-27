exports.index = (req, res, next) => {
  res.render("client/main", {
    title1: "메인페이지",
    user: req.user
  });
};
exports.join = (req, res) => {
  res.render("client/join", {
    title1: "회원가입",
    user: req.user
  });
};
exports.postJoin = (req, res) => {
  console.log(req);
  res.render("client/main");
};

exports.mypage = (req, res) => {
  console.log(req);
  res.render("client/mypage", { user: req.user });
};
