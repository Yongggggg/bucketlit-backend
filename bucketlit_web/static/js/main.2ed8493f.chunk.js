(window.webpackJsonp = window.webpackJsonp || []).push([[0], { 44: function (e, t, a) { e.exports = a(87) }, 49: function (e, t, a) { }, 50: function (e, t, a) { }, 87: function (e, t, a) { "use strict"; a.r(t); var n = a(0), l = a.n(n), o = a(24), r = a.n(o), c = (a(49), a(50), a(15)), i = a(9), s = a(10), m = a(12), u = a(11), d = a(6), h = a(13), g = a(96), p = a(97), E = a(113), f = a(99), b = a(100), y = a(105), k = a(95), v = a(98), w = a(101), C = a(102), S = a(103), O = a(104), N = a(8), j = a.n(N), I = a(88), _ = a(89), A = a(90), T = a(91), x = a(92), D = a(93), L = a(94), F = function (e) { function t(e) { var a; return Object(i.a)(this, t), (a = Object(m.a)(this, Object(u.a)(t).call(this, e))).handleLogout = function () { localStorage.clear(), window.location.reload() }, a.toggleNavbar = a.toggleNavbar.bind(Object(d.a)(a)), a.state = { collapsed: !0, loggedIn: !1 }, a } return Object(h.a)(t, e), Object(s.a)(t, [{ key: "componentDidMount", value: function () { null == localStorage.getItem("lastName") ? this.setState({ loggedIn: !1 }) : this.setState({ loggedIn: !0 }) } }, { key: "toggleNavbar", value: function () { this.setState({ collapsed: !this.state.collapsed }) } }, { key: "render", value: function () { var e = !0 === this.state.loggedIn ? l.a.createElement(I.a, null, l.a.createElement(_.a, { onClick: this.handleLogout }, "Logout")) : l.a.createElement(l.a.Fragment, null, l.a.createElement(I.a, null, l.a.createElement(_.a, { href: "/login/" }, "Login")), " ", l.a.createElement(I.a, null, l.a.createElement(_.a, { href: "/register/" }, "Register"))); return l.a.createElement("div", null, l.a.createElement(A.a, { color: "faded", light: !0, className: "navbar" }, l.a.createElement(T.a, { href: "/bucketlist/", className: "mr-auto" }, "BucketLit"), l.a.createElement(x.a, { onClick: this.toggleNavbar, className: "mr-2" }), l.a.createElement(D.a, { isOpen: !this.state.collapsed, navbar: !0 }, l.a.createElement(L.a, { navbar: !0 }, l.a.createElement(I.a, null, l.a.createElement(_.a, { href: "/" }, "Profile")), e)))) } }]), t }(l.a.Component), B = a(21), M = localStorage.getItem("token"), P = function (e) { function t(e) { var a; return Object(i.a)(this, t), (a = Object(m.a)(this, Object(u.a)(t).call(this, e))).handleInput = function (e) { a.setState(Object(c.a)({}, e.target.id, e.target.value)) }, a.handleSubmit = function (e) { e.preventDefault(); var t = localStorage.getItem("token"); j()({ method: "POST", url: "https://bucketlit.herokuapp.com/api/v1/items/", data: { title: a.state.title, category: a.state.category, start_by: a.state.start_by, description: a.state.description }, headers: { Authorization: "Bearer ".concat(t) } }).then(function (e) { console.log(e), window.location.reload() }).catch(function (e) { console.log(e) }) }, a.handleMore = function (e) { var t = e.target.getAttribute("data-item_id"); a.setState({ id: t }), console.log(a.state.id) }, a.state = { bucket_lists: [], modal: !1, title: "", category: "", start_by: "", description: "", id: "", loggedIn: !1, message: "" }, a.toggle = a.toggle.bind(Object(d.a)(a)), a } return Object(h.a)(t, e), Object(s.a)(t, [{ key: "componentDidMount", value: function () { var e = this; M ? this.setState({ loggedIn: !0 }) : this.setState({ loggedIn: !1 }), j()({ method: "GET", url: "https://bucketlit.herokuapp.com/api/v1/items/", headers: { Authorization: "Bearer ".concat(M) } }).then(function (t) { e.setState({ bucket_lists: t.data.items }), console.log(e.state.bucket_lists) }).catch(function (e) { console.log(e) }) } }, { key: "toggle", value: function () { this.setState(function (e) { return { modal: !e.modal } }) } }, { key: "render", value: function () { var e = !1 === this.state.loggedIn ? l.a.createElement(k.a, { style: { backgroundColor: "#F49F0A", border: "white" }, className: "float-right" }, l.a.createElement(B.b, { class: "button", to: "/login/" }, "Login")) : l.a.createElement(k.a, { style: { backgroundColor: "#F49F0A", border: "white" }, onClick: this.toggle, className: "float-right" }, "New"); return l.a.createElement(l.a.Fragment, null, l.a.createElement(F, null), l.a.createElement(g.a, null, l.a.createElement(p.a, null, " ", e, l.a.createElement("h1", null, "My Bucket List"), l.a.createElement("div", null, l.a.createElement(v.a, { style: { backgroundColor: "#d05353", color: "#023C40" } }, "Lifestyle"), l.a.createElement(v.a, { style: { backgroundColor: "#e58f65", color: "#023C40" } }, "Travel"), l.a.createElement(v.a, { style: { backgroundColor: "#f9e784", color: "#023C40" } }, "Self-Satisfaction"), l.a.createElement(v.a, { style: { backgroundColor: "#f1e8b8", color: "#023C40" } }, "Self-Care"), l.a.createElement(v.a, { style: { backgroundColor: "#F5F5F5", color: "#023C40" } }, " Skills"), l.a.createElement(v.a, { style: { backgroundColor: "white", color: "#023C40" } }, " Others"))), l.a.createElement(p.a, null, "Press item for more"), this.state.bucket_lists.map(function (e) { return !0 === e.complete ? l.a.createElement(p.a, { style: { backgroundColor: "#e58f65" } }, l.a.createElement("strike", null, l.a.createElement("a", { class: "linkA", href: "/item/".concat(e.id) }, e.title))) : "Travel" === e.category ? l.a.createElement(p.a, { style: { backgroundColor: "#e58f65" } }, l.a.createElement("a", { class: "linkA", href: "/item/".concat(e.id) }, e.title)) : "Lifestyle" === e.category ? l.a.createElement(p.a, { style: { backgroundColor: "#d05353" } }, l.a.createElement("a", { class: "linkA", href: "/item/".concat(e.id) }, e.title)) : "Self-Satisfaction" === e.category ? l.a.createElement(p.a, { style: { backgroundColor: "#f9e784" } }, l.a.createElement("a", { class: "linkA", href: "/item/".concat(e.id) }, e.title)) : "Self-Care" === e.category ? l.a.createElement(p.a, { style: { backgroundColor: "#f1e8b8" } }, l.a.createElement("a", { class: "linkA", href: "/item/".concat(e.id) }, e.title)) : "Skills" === e.category ? l.a.createElement(p.a, { style: { backgroundColor: "#F5F5F5" } }, l.a.createElement("a", { class: "linkA", href: "/item/".concat(e.id) }, e.title)) : l.a.createElement(p.a, null, l.a.createElement("a", { class: "linkA", href: "/item/".concat(e.id) }, e.title)) })), l.a.createElement(E.a, { isOpen: this.state.modal, toggle: this.toggle }, l.a.createElement(f.a, { toggle: this.toggle }, "New Stuff"), l.a.createElement(b.a, null, l.a.createElement(w.a, null, l.a.createElement(C.a, null, l.a.createElement(S.a, { for: "Title" }, "Title"), l.a.createElement(O.a, { type: "title", name: "title", id: "title", placeholder: "Title", onChange: this.handleInput })), l.a.createElement(C.a, null, l.a.createElement(S.a, { for: "startDatetime" }, "Start By"), l.a.createElement(O.a, { type: "date", name: "date", id: "start_by", placeholder: "date placeholder", onChange: this.handleInput })), l.a.createElement(C.a, null, l.a.createElement(S.a, { for: "category" }, "Category"), l.a.createElement(O.a, { type: "select", name: "select", id: "category", onChange: this.handleInput }, l.a.createElement("option", null, "Lifestyle"), l.a.createElement("option", null, "Self-Care"), l.a.createElement("option", null, "Self-Satisfaction"), l.a.createElement("option", null, "Skills"), l.a.createElement("option", null, "Travel"), l.a.createElement("option", null, "Others"))), l.a.createElement(C.a, null, l.a.createElement(S.a, { for: "description" }, "Description"), l.a.createElement(O.a, { type: "textarea", name: "text", id: "description", onChange: this.handleInput })))), l.a.createElement(y.a, null, l.a.createElement(k.a, { color: "primary", onClick: this.handleSubmit }, "Add to List"), l.a.createElement(k.a, { color: "secondary", onClick: this.toggle }, "Cancel")))) } }]), t }(l.a.Component), Y = a(23), z = a(106), R = a(107), q = function (e) { function t() { var e, a; Object(i.a)(this, t); for (var n = arguments.length, l = new Array(n), o = 0; o < n; o++)l[o] = arguments[o]; return (a = Object(m.a)(this, (e = Object(u.a)(t)).call.apply(e, [this].concat(l)))).state = { email: "", password: "", firstName: "", lastName: "", dob: "" }, a.handleInput = function (e) { a.setState(Object(c.a)({}, e.target.id, e.target.value)) }, a.handleSubmit = function (e) { e.preventDefault(), j()({ method: "POST", url: "https://bucketlit.herokuapp.com/api/v1/users/", data: { email: a.state.email, password: a.state.password, firstName: a.state.firstName, lastName: a.state.lastName, dateOfBirth: a.state.dob } }).then(function (e) { "success" === e.data.status ? (console.log(e), window.location.reload()) : console.log("failed") }).catch(function (e) { console.log(e) }) }, a } return Object(h.a)(t, e), Object(s.a)(t, [{ key: "render", value: function () { return l.a.createElement("div", { className: "container" }, l.a.createElement(w.a, null, l.a.createElement("h1", null, "Register"), l.a.createElement("hr", null), l.a.createElement(z.a, { form: !0 }, l.a.createElement(R.a, { md: 6 }, l.a.createElement(C.a, null, l.a.createElement(S.a, { for: "firstName" }, "First Name"), l.a.createElement(O.a, { type: "firstName", name: "firstName", id: "firstName", placeholder: "First Name", onChange: this.handleInput }))), l.a.createElement(R.a, { md: 6 }, l.a.createElement(C.a, null, l.a.createElement(S.a, { for: "lastName" }, "Last Name"), l.a.createElement(O.a, { type: "lastName", name: "lastName", id: "lastName", placeholder: "Last Name", onChange: this.handleInput })))), l.a.createElement(C.a, null, l.a.createElement(S.a, { for: "email" }, "Email"), l.a.createElement(O.a, { type: "email", name: "email", id: "email", placeholder: "xxx@example.com", onChange: this.handleInput })), l.a.createElement(C.a, null, l.a.createElement(S.a, { for: "examplePassword" }, "Password"), l.a.createElement(O.a, { type: "password", name: "password", id: "password", placeholder: "Password", onChange: this.handleInput })), l.a.createElement(C.a, null, l.a.createElement(S.a, { for: "dateOfBirth" }, "Date of Birth"), l.a.createElement(O.a, { type: "date", name: "date", id: "dob", placeholder: "date placeholder", onChange: this.handleInput })), l.a.createElement("p", null, "Already have an account? ", l.a.createElement("a", { href: "/login/" }, "Login")), l.a.createElement(k.a, { onClick: this.handleSubmit, color: "primary", className: "float-right" }, l.a.createElement(B.b, { class: "button", to: "/login/" }, "Register")))) } }]), t }(l.a.Component), G = function (e) { function t() { var e, a; Object(i.a)(this, t); for (var n = arguments.length, l = new Array(n), o = 0; o < n; o++)l[o] = arguments[o]; return (a = Object(m.a)(this, (e = Object(u.a)(t)).call.apply(e, [this].concat(l)))).state = { email: "", password: "" }, a.handleInput = function (e) { a.setState(Object(c.a)({}, e.target.id, e.target.value)) }, a.handleSubmit = function (e) { e.preventDefault(), j()({ method: "POST", url: "https://bucketlit.herokuapp.com/api/v1/sessions/", data: { email: a.state.email, password: a.state.password } }).then(function (e) { console.log(e), "success" === e.data.status ? (localStorage.setItem("token", e.data.auth_token), localStorage.setItem("userId", e.data.user.id), localStorage.setItem("firstName", e.data.user.first_name), localStorage.setItem("lastName", e.data.user.last_name), localStorage.setItem("dob", e.data.user.dob), window.location.reload()) : console.log("failed") }).catch(function (e) { console.log(e) }) }, a } return Object(h.a)(t, e), Object(s.a)(t, [{ key: "render", value: function () { return l.a.createElement(l.a.Fragment, null, l.a.createElement(F, null), l.a.createElement("div", { className: "container" }, l.a.createElement(w.a, null, l.a.createElement("br", null), l.a.createElement("h1", null, "Login"), l.a.createElement("hr", null), l.a.createElement(C.a, null, l.a.createElement(S.a, { for: "email" }, "Email"), l.a.createElement(O.a, { type: "email", name: "email", id: "email", placeholder: "xxx@example.com", onChange: this.handleInput })), l.a.createElement(C.a, null, l.a.createElement(S.a, { for: "password" }, "Password"), l.a.createElement(O.a, { type: "password", name: "password", id: "password", placeholder: "Password", onChange: this.handleInput })), l.a.createElement("p", null, "Don't have an account? ", l.a.createElement("a", { href: "/register/" }, "Register")), l.a.createElement(k.a, { onClick: this.handleSubmit, color: "primary", className: "float-right" }, l.a.createElement(B.b, { class: "button", to: "/" }, "Login"))))) } }]), t }(l.a.Component), J = a(17), W = a.n(J), H = function (e) { function t(e) { var a; return Object(i.a)(this, t), (a = Object(m.a)(this, Object(u.a)(t).call(this, e))).countdown = function (e, t) { var n = W()(), l = W()(e), o = n.diff(l, t); a.setState({ countdown: o }) }, a.handleTime = function () { var e = setInterval(function () { a.setState({ countdown: a.state.countdown + 1 }) }, 1e3); a.setState({ timer: e }) }, a.state = { lastName: localStorage.getItem("lastName"), firstName: localStorage.getItem("firstName"), dob: localStorage.getItem("dob"), date: W()().startOf("days"), countdown: "", quotes: {}, loggedIn: !1, message: {} }, a } return Object(h.a)(t, e), Object(s.a)(t, [{ key: "componentDidMount", value: function () { var e = this; this.state.lastName ? (this.setState({ loggedIn: !0, message: { greeting: "Welcome!", frontCountdown: "You have been living for", backCountdown: "seconds." } }), this.countdown(this.state.dob, "seconds"), this.handleTime()) : (this.setState({ loggedIn: !1, message: { greeting: "Hey", name: "Stranger!", backCountdown: "seconds has passed starting from Today" } }), this.handleTime(), this.countdown(this.state.date, "seconds")), j()({ method: "GET", url: "https://andruxnet-random-famous-quotes.p.rapidapi.com/?cat=famous&count=10", headers: { "X-RapidAPI-Host": "andruxnet-random-famous-quotes.p.rapidapi.com", "X-RapidAPI-Key": "db5c5d9abfmsh055b60003e7a964p1407dbjsnc5e7d6674725" } }).then(function (t) { e.setState({ quotes: t.data[0] }) }).catch(function (e) { console.log(e) }) } }, { key: "render", value: function () { var e = !1 === this.state.loggedIn ? l.a.createElement("h6", null, "Don't waste your time! Try ", l.a.createElement("a", { class: "link", href: "/register/" }, "REGISTER"), " or ", l.a.createElement("a", { class: "link", href: "/login/" }, "LOGIN"), "!", l.a.createElement("br", null), " BucketLit let you record your journey in achieving Your Bucket List.") : l.a.createElement("h6", null, "Time is running out, why not live life to the fullest? ", l.a.createElement("a", { class: "link", href: "/bucketlist/" }, "BucketList")); return l.a.createElement(l.a.Fragment, null, l.a.createElement(F, null), l.a.createElement("div", { className: "text-center container profile" }, l.a.createElement("h2", null, this.state.message.greeting, " ", this.state.firstName, " ", this.state.lastName, ", ", this.state.message.name), l.a.createElement("h3", null, this.state.message.frontCountdown), l.a.createElement("h2", null, this.state.countdown), l.a.createElement("h3", null, this.state.message.backCountdown), e), l.a.createElement("br", null), l.a.createElement("div", { className: "container quote text-center" }, l.a.createElement("h6", { class: "font-italic" }, "Quote of the Day"), l.a.createElement("h4", null, this.state.quotes.quote), l.a.createElement("h6", { className: "text-center" }, "-- ", this.state.quotes.author))) } }]), t }(l.a.Component), U = a(109), X = a(110), K = a(111), Q = a(112), $ = function (e) { function t(e) { var a; return Object(i.a)(this, t), (a = Object(m.a)(this, Object(u.a)(t).call(this, e))).handleInput = function (e) { a.setState(Object(c.a)({}, e.target.id, e.target.value)) }, a.handleAdd = function () { a.props.toggleNew(); var e = localStorage.getItem("token"); console.log(a.state.imageUrl), j()({ method: "POST", url: "https://bucketlit.herokuapp.com/api/v1/journals/".concat(a.props.item_id, "/"), headers: { Authorization: "Bearer ".concat(e) }, data: { title: a.state.title, date: a.state.date, reflection: a.state.reflection } }).then(function (e) { console.log(e), window.location.reload() }).catch(function (e) { console.log(e) }) }, a.state = { title: "", date: "", reflection: "" }, a } return Object(h.a)(t, e), Object(s.a)(t, [{ key: "render", value: function () { return l.a.createElement(E.a, { isOpen: this.props.isOpen, toggle: this.props.toggleNew, className: this.props.className }, l.a.createElement(f.a, { toggle: this.toggleNew }, "New Journal"), l.a.createElement(b.a, null, l.a.createElement(w.a, null, l.a.createElement(C.a, { row: !0 }, l.a.createElement(S.a, { for: "title", sm: 2 }, "Title*"), l.a.createElement(R.a, { sm: 10 }, l.a.createElement(O.a, { type: "title", name: "title", id: "title", placeholder: "Title", onChange: this.handleInput }))), l.a.createElement(C.a, { row: !0 }, l.a.createElement(S.a, { for: "date", sm: 2 }, "Date*"), l.a.createElement(R.a, { sm: 10 }, l.a.createElement(O.a, { type: "date", name: "date", id: "date", placeholder: "date placeholder", onChange: this.handleInput }))), l.a.createElement(C.a, { row: !0 }, l.a.createElement(S.a, { for: "reflection", sm: 2 }, "Reflection"), l.a.createElement(R.a, { sm: 10 }, l.a.createElement(O.a, { type: "textarea", name: "reflection", id: "reflection", onChange: this.handleInput }))))), l.a.createElement(y.a, null, l.a.createElement(k.a, { color: "primary", onClick: this.handleAdd }, "Add"), " ", l.a.createElement(k.a, { color: "secondary", onClick: this.props.toggleNew }, "Cancel"))) } }]), t }(l.a.Component), V = a(108), Z = localStorage.getItem("token"), ee = function (e) { function t(e) { var a; return Object(i.a)(this, t), (a = Object(m.a)(this, Object(u.a)(t).call(this, e))).handleInput = function (e) { a.setState(Object(c.a)({}, e.target.id, e.target.value)) }, a.handleSubmit = function () { j()({ method: "PUT", url: "https://bucketlit.herokuapp.com/api/v1/items/".concat(a.props.item_id, "/"), headers: { Authorization: "Bearer ".concat(Z) }, data: { title: a.state.title, category: a.state.category, start_by: a.state.start_by, description: a.state.description, completed_by: a.state.completed_by, complete: a.state.complete } }).then(function (e) { console.log(e), a.props.toggleEdit(), window.location.reload() }).catch(function (e) { console.log(e), a.setState({ error: "Please pick a date, you can change it later." }) }) }, a.state = { item: {}, id: "", title: "", category: "", description: "", start_by: "", completed_by: "", complete: !1, error: "" }, a } return Object(h.a)(t, e), Object(s.a)(t, [{ key: "componentDidMount", value: function () { var e = this; j()({ method: "GET", url: "https://bucketlit.herokuapp.com/api/v1/items/".concat(this.props.item_id, "/"), headers: { Authorization: "Bearer ".concat(Z) } }).then(function (t) { e.setState({ item: t.data.item[0], id: t.data.item[0].id, title: t.data.item[0].title, category: t.data.item[0].category, description: t.data.item[0].description, start_by: t.data.item[0].start_by, completed_by: t.data.item[0].completed_by, complete: t.data.item[0].complete }) }).catch(function (e) { console.log(e) }) } }, { key: "render", value: function () { var e = this; return l.a.createElement(E.a, { isOpen: this.props.isOpen, toggle: this.props.toggleEdit }, l.a.createElement(f.a, { toggle: this.props.toggleEdit }, "Edit"), l.a.createElement(b.a, null, l.a.createElement(w.a, null, l.a.createElement(C.a, null, l.a.createElement(S.a, { for: "Title" }, "Title"), l.a.createElement(O.a, { type: "title", name: "title", id: "title", placeholder: "Title", value: this.state.title, onChange: this.handleInput })), l.a.createElement(C.a, null, l.a.createElement(S.a, { for: "startDatetime" }, "Start By"), l.a.createElement(O.a, { type: "date", name: "date", id: "start_by", placeholder: "date placeholder", value: W()(this.state.start_by).format("YYYY-MM-DD"), onChange: this.handleInput })), l.a.createElement(C.a, null, l.a.createElement(S.a, { for: "completeDatetime" }, "Completed By"), l.a.createElement(O.a, { type: "date", name: "date", id: "completed_by", placeholder: "date placeholder", value: W()(this.state.completed_by).format("YYYY-MM-DD"), onChange: this.handleInput }), l.a.createElement(V.a, null, this.state.error)), l.a.createElement(C.a, null, l.a.createElement(S.a, { for: "category" }, "Category"), l.a.createElement(O.a, { type: "select", name: "select", id: "category", value: this.state.category, onChange: this.handleInput }, l.a.createElement("option", null, "Select"), l.a.createElement("option", null, "Lifestyle"), l.a.createElement("option", null, "Self-Care"), l.a.createElement("option", null, "Self-Satisfaction"), l.a.createElement("option", null, "Skills"), l.a.createElement("option", null, "Travel"), l.a.createElement("option", null, "Others"))), l.a.createElement(C.a, null, l.a.createElement(S.a, { for: "description" }, "Description"), l.a.createElement(O.a, { type: "textarea", name: "text", id: "description", value: this.state.description, onChange: this.handleInput })), l.a.createElement(C.a, { check: !0 }, l.a.createElement(S.a, { check: !0 }, l.a.createElement(O.a, { type: "checkbox", checked: this.state.complete, onChange: function () { return e.setState(function (e) { return { complete: !e.complete } }) } }), " ", "Completed")))), l.a.createElement(y.a, null, l.a.createElement(k.a, { color: "primary", onClick: this.handleSubmit }, "Save"), l.a.createElement(k.a, { color: "secondary", onClick: this.props.toggleEdit }, "Cancel"))) } }]), t }(l.a.Component), te = localStorage.getItem("token"), ae = function (e) { function t(e) { var a; return Object(i.a)(this, t), (a = Object(m.a)(this, Object(u.a)(t).call(this, e))).handleDelete = function (e) { var t = e.target.getAttribute("data-journal_id"); j()({ method: "DELETE", url: "https://bucketlit.herokuapp.com/api/v1/journals/delete/".concat(t, "/"), headers: { Authorization: "Bearer ".concat(te) } }).then(function (e) { console.log(e), window.location.reload() }).catch(function (e) { console.log(e) }) }, a.state = { item: {}, journals: [], editModal: !1, newModal: !1 }, a.toggleNew = a.toggleNew.bind(Object(d.a)(a)), a.toggleEdit = a.toggleEdit.bind(Object(d.a)(a)), a } return Object(h.a)(t, e), Object(s.a)(t, [{ key: "toggleNew", value: function () { this.setState(function (e) { return { newModal: !e.newModal } }) } }, { key: "toggleEdit", value: function () { this.setState(function (e) { return { editModal: !e.editModal } }) } }, { key: "componentDidMount", value: function () { var e = this; j()({ method: "GET", url: "https://bucketlit.herokuapp.com/api/v1/items/".concat(this.props.match.params.id, "/"), headers: { Authorization: "Bearer ".concat(te) } }).then(function (t) { e.setState({ item: t.data.item[0] }), console.log(e.state.item) }).catch(function (e) { console.log(e) }), j()({ method: "GET", url: "https://bucketlit.herokuapp.com/api/v1/journals/".concat(this.props.match.params.id, "/"), headers: { Authorization: "Bearer ".concat(te) } }).then(function (t) { e.setState({ journals: t.data.journal }) }).catch(function (e) { console.log(e) }) } }, { key: "render", value: function () { var e = this; return l.a.createElement(l.a.Fragment, null, l.a.createElement(F, null), l.a.createElement("div", { className: "container-fluid" }, l.a.createElement("br", null), l.a.createElement("h1", null, this.state.item.title, " ", l.a.createElement(k.a, { size: "sm", style: { backgroundColor: "#F49F0A", border: "white" }, onClick: this.toggleEdit, className: "editButton" }, "Edit")), l.a.createElement(ee, { isOpen: this.state.editModal, toggleEdit: this.toggleEdit, item_id: this.props.match.params.id }), l.a.createElement("h4", null, W()(this.state.item.start_by).format("ll"), " - ", W()(this.state.item.completed_by).format("ll")), l.a.createElement("h6", null, this.state.item.category), l.a.createElement("p", null, this.state.item.description), l.a.createElement(k.a, { onClick: this.toggleNew, style: { backgroundColor: "#F49F0A", border: "white" } }, "Add New Journal"), l.a.createElement($, { isOpen: this.state.newModal, toggleNew: this.toggleNew, item_id: this.props.match.params.id }), l.a.createElement("hr", null), l.a.createElement(U.a, null, this.state.journals.map(function (t) { return l.a.createElement(l.a.Fragment, null, l.a.createElement(X.a, { body: !0, className: "text-center" }, l.a.createElement(K.a, null, l.a.createElement("h6", null, t.title, " "), l.a.createElement("h6", null, W()(t.date).format("LL"))), l.a.createElement(Q.a, null, t.reflection), l.a.createElement(k.a, { outline: !0, color: "danger", onClick: e.handleDelete, "data-journal_id": t.id }, "Delete"))) })))) } }]), t }(l.a.Component); var ne = function () { return l.a.createElement(l.a.Fragment, null, l.a.createElement(Y.a, { exact: !0, path: "/bucketlist/", component: P }), l.a.createElement(Y.a, { exact: !0, path: "/register/", component: q }), l.a.createElement(Y.a, { exact: !0, path: "/login/", component: G }), l.a.createElement(Y.a, { exact: !0, path: "/item/:id", component: ae }), l.a.createElement(Y.a, { exact: !0, path: "/", component: H })) }; a(86), Boolean("localhost" === window.location.hostname || "[::1]" === window.location.hostname || window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/)); r.a.render(l.a.createElement(B.a, null, l.a.createElement(ne, null)), document.getElementById("root")), "serviceWorker" in navigator && navigator.serviceWorker.ready.then(function (e) { e.unregister() }) } }, [[44, 1, 2]]]);
//# sourceMappingURL=main.2ed8493f.chunk.js.map