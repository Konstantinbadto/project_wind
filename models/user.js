var mongoose = require('mongoose');
var crypto = require('crypto');

var Schema = mongoose.Schema;

var userSchema = new Schema({
  username: {
    type: String,
    unique: true,
    required: true
  },
  hashedPassword: {
    type: String,
    required: true
  },
  salt: {
    type: String,
    required: true
  },
  created: {
    type: Date,
    default: Date.now
  }
});
<form class="form-horizontal" action="/logreg" method="post">
<div class="form-group">
<label class="control-label col-sm-1">Имя</label>
<div class="col-sm-5">
<input class="form-control" type="text"
placeholder="Введите имя" name="username"/>
</div>
</div>
<div class="form-group">
<label class="control-label col-sm-1">Пароль</label>
<div class="col-sm-5">
<input class="form-control" type="password"
placeholder="Введите пароль" name="password"/>
</div>
</div>
<div class="form-group">
<div class="col-sm-offset-1 col-sm-5">
<input class="btn btn-primary" type="submit"
value="Войти"/>
</div>
</div>
</form>


// Добавляем виртуальное поле password
userSchema.virtual("password")
  .set(function(password){
    this._purePassword = password;
    this.salt = Math.random() + "";
    this.hashedPassword = this.encryptPassword(password);
  })
  .get(function(){
    return this._purePassword;
  });

// Добавляем метод encryptPassword
userSchema.methods.encryptPassword = function(password){
  return crypto.createHmac('sha1', this.salt).update(password).digest('hex');
};

module.exports.User = mongoose.model("User", userSchema);