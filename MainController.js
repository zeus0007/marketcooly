exports.index = (req, res) => {
  res.render("client/main", { title1: "메인페이지" });
};
exports.join = (req, res) => {
  res.render("client/join", { title1: "회원가입" });
};
