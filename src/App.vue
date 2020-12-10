<template>
  <div id="app">
    <form @submit.prevent="handleSubmit()">
      <div class="form__group">
        <h2>Основные данные</h2>

        <div class="form__element">
          <div class="form__content">
            <label for="lastName" class="form__text required">Фамилия</label>
            <input type="text" v-model="user.lastName" id="lastName" name="lastName" class="control__text" @blur="$v.user.lastName.$touch()" />
          </div>
          <div v-if="$v.user.lastName.$error" class="form__error">
            <div v-if="!$v.user.town.alpha" class="invalid-feedback">Поле "Фамилия" должно содержать только буквы</div>
            <div v-else-if="!$v.user.lastName.required" class="invalid-feedback">Поле "Фамилия" обязательно для заполнения</div>
          </div>
        </div>

        <div class="form__element">
          <div class="form__content">
            <label for="firstName" class="form__text required">Имя</label>
            <input type="text" v-model="user.firstName" id="firstName" name="firstName" class="control__text" @blur="$v.user.firstName.$touch()" />
          </div>
          <div v-if="$v.user.firstName.$error" class="form__error">
            <div v-if="!$v.user.town.alpha" class="invalid-feedback">Поле "Имя" должно содержать только буквы</div>
            <div v-else-if="!$v.user.firstName.required" class="invalid-feedback">Поле "Имя" обязательно для заполнения</div>
          </div>
        </div>

        <div class="form__element">
          <div class="form__content">
            <label for="secondName" class="form__text">Отчество</label>
            <input type="text" v-model="user.secondName" id="secondName" name="secondName" class="control__text" />
          </div>
        </div>

        <div class="form__element">
          <div class="form__content">
            <label for="birthDate" class="form__text required">Дата рождения</label>
            <input type="date" v-model="user.birthDate" id="birthDate" name="birthDate" class="control__date" @blur="$v.user.birthDate.$touch()" />
          </div>
          <div v-if="$v.user.birthDate.$error" class="form__error">
            <div v-if="!$v.user.birthDate.required" class="invalid-feedback">Поле "Дата рождения" обязательно для заполнения</div>
          </div>
        </div>

        <div class="form__element">
          <div class="form__content">
            <label for="phoneNumber" class="form__text required">Номер телефона</label>
            <input type="text" v-model="user.phoneNumber" placeholder="7##########" id="phoneNumber" name="phoneNumber" class="control__text phone" @blur="$v.user.phoneNumber.$touch()" />
          </div>
          <div v-if="$v.user.phoneNumber.$error" class="form__error">
            <div v-if="$v.user.phoneNumber.$invalid" class="invalid-feedback">Неверный формат номера телефона</div>
            <div v-else class="invalid-feedback">Поле "Номер телефона" обязательно для заполнения</div>
          </div>
        </div>

        <div class="form__element">
          <div class="form__content">
            <label for="sex" class="form__text">Пол</label>
            <select v-model="user.sex" class="control__select" id="sex">
              <option disabled value="">Выберите один из вариантов</option>
              <option>М</option>
              <option>Ж</option>
            </select>
          </div>
        </div>

        <div class="form__element">
          <div class="form__content">
            <span class="form__text required">Тип клиента</span>
            <div class="control__checkbox">
              <div>
                <label for="vip">VIP</label>
                <input type="checkbox" v-model="user.clientType" value="vip" id="vip" @change="$v.user.clientType.$touch()">
              </div>
              <div>
                <label for="problem">Проблемные</label>
                <input type="checkbox" v-model="user.clientType" value="problem" id="problem" @change="$v.user.clientType.$touch()">
              </div>
              <div>
                <label for="omc">ОМС</label>
                <input type="checkbox" v-model="user.clientType" value="omc" id="omc" @change="$v.user.clientType.$touch()">
              </div>
            </div>
          </div>
          <div v-if="$v.user.clientType.$error">
            <div v-if="!$v.user.clientType.required" class="invalid-feedback">Поле "Тип клиента" обязательно для заполнения</div>
          </div>
        </div>

        <div class="form__element">
          <div class="form__content">
            <span class="form__text">Лечащий доктор</span>
            <div class="control__checkbox">
              <div>
                <label for="ivanov">Иванов</label>
                <input type="radio" v-model="user.doctor" name="doctor" value="ivanov" id="ivanov">
              </div>
              <div>
                <label for="zaharov">Захаров</label>
                <input type="radio" v-model="user.doctor" name="doctor" value="zaharov" id="zaharov">
              </div>
              <div>
                <label for="chernyshova">Чернышева</label>
                <input type="radio" v-model="user.doctor" name="doctor" value="chernyshova" id="chernyshova">
              </div>
            </div>
          </div>
        </div>

        <div class="form__element">
          <div class="form__content">
            <label for="email" class="form__text required">E-mail</label>
            <input type="email" v-model="user.email" id="email" name="email" class="control__text" @blur="$v.user.email.$touch()"/>
          </div>
          <div v-if="$v.user.email.$error" class="form__error">
            <div v-if="!$v.user.email.email" class="invalid-feedback">Неверный формат e-mail</div>
            <div v-else-if="!$v.user.email.required" class="invalid-feedback">Поле "E-mail" обязательно для заполнения</div>
          </div>
        </div>

        <div class="form__element">
          <div class="form__content form__content--checkbox">
            <label for="smsCheck" class="form__text">Не отправлять СМС</label>
            <input type="checkbox" v-model="user.smsCheck" name="smsCheck" id="smsCheck" class="checkbox">
          </div>
        </div>
      </div>

      <div class="form__group">
        <h2>Адрес</h2>

        <div class="form__element">
          <div class="form__content">
            <label for="index" class="form__text">Индекс</label>
            <input type="text" v-model="user.index" id="index" class="control__text">
          </div>
        </div>

        <div class="form__element">
          <div class="form__content">
            <label for="country" class="form__text">Страна</label>
            <input type="text" v-model="user.country" id="country" class="control__text">
          </div>
        </div>

        <div class="form__element">
          <div class="form__content">
            <label for="region" class="form__text">Область</label>
            <input type="text" v-model="user.region" id="region" class="control__text">
          </div>
        </div>

        <div class="form__element">
          <div class="form__content">
            <label for="town" class="form__text required">Город</label>
            <input type="text" v-model="user.town" id="town" @blur="$v.user.town.$touch()" class="control__text">
          </div>
          <div v-if="$v.user.town.$error" class="form__error">
            <div v-if="!$v.user.town.alpha" class="invalid-feedback">Поле "Город" должно содержать только буквы</div>
            <div v-else-if="!$v.user.town.required" class="invalid-feedback">Поле "Город" обязательно для заполнения</div>
          </div>
        </div>

        <div class="form__element">
          <div class="form__content">
            <label for="street" class="form__text">Улица</label>
            <input type="text" v-model="user.street" id="street" class="control__text">
          </div>
        </div>

        <div class="form__element">
          <div class="form__content">
            <label for="house" class="form__text">Дом</label>
            <input type="text" v-model="user.house" id="house" class="control__text">
          </div>
        </div>
      </div>

      <div class="form__group">
        <h2>Документ</h2>

        <div class="form__element">
          <div class="form__content">
            <label for="documentType" class="form__text required">Тип документа</label>
            <select v-model="user.documentType" @blur="$v.user.documentType.$touch()" class="control__select" id="documentType">
              <option disabled value="">Выберите один из вариантов</option>
              <option>Паспорт</option>
              <option>Свидетельство о рождении</option>
              <option>Вод. удостворение</option>
            </select>
          </div>
          <div v-if="$v.user.documentType.$error" class="form__error">
            <div v-if="!$v.user.documentType.required" class="invalid-feedback">Поле "Тип документа" обязательно для заполнения</div>
          </div>
        </div>

        <div class="form__element">
          <div class="form__content">
            <label for="docSeries" class="form__text">Серия</label>
            <input type="text" v-model="user.docSeries" id="docSeries" class="control__text">
          </div>
        </div>

        <div class="form__element">
          <div class="form__content">
            <label for="docNumber" class="form__text">Номер</label>
            <input type="text" v-model="user.docNumber" id="docNumber" class="control__text">
          </div>
        </div>

        <div class="form__element">
          <div class="form__content">
            <label for="docOrg" class="form__text">Кем выдан</label>
            <input type="text" v-model="user.docOrg" id="docOrg" class="control__text">
          </div>
        </div>

        <div class="form__element">
          <div class="form__content">
            <label for="docDate" class="form__text required">Дата выдачи</label>
            <input type="date" v-model="user.docDate" id="docDate" name="docDate" class="control__date" @blur="$v.user.docDate.$touch()" />
          </div>
          <div v-if="$v.user.docDate.$error" class="form__error">
            <div v-if="!$v.user.docDate.required" class="invalid-feedback">Поле "Дата выдачи" обязательно для заполнения</div>
          </div>
        </div>
      </div>
      <h5> Поле обязательное для заполнения</h5>

      <div class="form__group">
        <button type="submit" class="btn btn-primary" @submit="handleSubmit()">Регистрация</button>
      </div>

    </form>
  </div>
</template>

<script>
  import { required, email } from "vuelidate/lib/validators";

  export default {
    name: 'App',
    data () {
      return {
        user: {
          firstName: null,
          secondName: null,
          lastName: null,
          birthDate: null,
          phoneNumber: null,
          sex: null,
          clientType: [],
          doctor: null,
          email: null,
          smsCheck: false,
          index: null,
          country: null,
          region: null,
          town: null,
          street: null,
          house: null,
          documentType: null,
          docSeries: null,
          docNumber: null,
          docOrg: null,
          docDate: null,
        },
      }
    },
    created() {},
    mounted() {},
    validations: {
      user: {
        firstName: { required, alpha: val => /^[а-яё]*$/i.test(val), },
        lastName: { required, alpha: val => /^[а-яё]*$/i.test(val), },
        birthDate: { required },
        phoneNumber: { validFormat: val => /^7\d{10}$/.test(val) },
        clientType: { required },
        email: { required, email },
        town: { required, alpha: val => /^[а-яё]*$/i.test(val), },
        documentType: { required },
        docDate: { required },
      }
    },
    methods: {
      handleSubmit() {
        if (this.$v.$invalid) {
          alert("\n\nОбязательные поля не заполнены. Клиент не создан.");
          //return;
        } else {
          alert(`\n\nСоздан клиент:\n\n${this.user.firstName} ${this.user.lastName}`);

          for(let prop in this.user){
            this.user[prop] = null;
          }
          this.user['clientType'] = [];
          this.user['smsCheck'] = false;
        }
      }
    }
  };
</script>

<style lang="sass">
// variables
$dark-blue: #061b33
$blue: #6633CC
$light-blue: #b6d8d5
$red: #c45238
$mediaWidthMobile: 450px
$mediaWidthTablet: 900px
$mediaWidthLaptop: 1200px

// mixins
=media-laptop
  @media screen and (max-width: $mediaWidthLaptop)
    @content
=media-tablet
  @media screen and (max-width: $mediaWidthTablet)
    @content
=media-mobile
  @media screen and (max-width: $mediaWidthMobile)
    @content

// styles
*
  box-sizing: border-box
  margin: 0
  padding: 0

  #app
    font-family: 'Montserrat', sans-serif
    -webkit-font-smoothing: antialiased
    -moz-osx-font-smoothing: grayscale
    text-align: center
    color: $red
    background-color: $dark-blue
    padding-bottom: 50px
    min-width: 350px

    .form__group
      margin: 0 auto
      padding: 50px 0 0
      width: 700px
      max-width: 80vw

      h2
        font-size: 26px
        line-height: 30px
        text-align: start
        border-bottom: 1px solid $red
        height: 40px
        user-select: none

      .form__element
        margin: 20px auto
        color: $red
        display: flex
        justify-content: space-between
        max-width: 80vw
        width: 700px
        flex-flow: column

        .form__content
          display: flex
          flex-direction: row
          justify-content: space-between
          align-items: center

          +media-tablet
            flex-direction: column

          &.form__content--checkbox
            justify-content: normal

            +media-tablet
              justify-content: center
              flex-direction: row

          .form__text
            user-select: none
            font-size: 20px
            line-height: 40px
            text-align: start
            width: 50%
            position: relative
            outline-color: $blue
            outline-width: 1px

            +media-tablet
              width: 100%
              font-size: 24px
              line-height: 40px

            &.required::after
              content: '*'
              position: relative
              width: 15px
              height: 15px
              color: $light-blue
              left: 3px

          .control__text
            height: 40px
            outline-color: $blue
            outline-width: 1px
            border: none
            border-radius: 5px
            font-size: 20px
            color: $blue
            line-height: 40px
            padding: 0 20px
            width: 50%

            +media-tablet
              width: 100%

            &.phone
              text-transform: uppercase

          .control__select
            width: 50%
            height: 40px
            border-radius: 5px
            padding: 0 20px
            font-size: 20px
            color: $blue
            line-height: 40px
            outline-color: $blue
            outline-width: 1px
            cursor: pointer

            +media-tablet
              width: 100%

          .control__date
            width: 50%
            height: 40px
            border-radius: 5px
            text-transform: uppercase
            font-size: 20px
            padding: 0 20px
            color: $blue
            cursor: pointer

            +media-tablet
              width: 100%

          .control__checkbox
            width: 50%
            height: 40px
            display: flex
            justify-content: space-between
            align-items: center

            +media-tablet
              width: 100%

            +media-tablet
              flex-direction: column
              height: auto
              align-items: flex-start

            input
              margin-left: 5px
              cursor: pointer

            label
              cursor: pointer

          .checkbox
            width: 24px
            height: 24px
            cursor: pointer

        .invalid-feedback
          height: 40px
          width: 100%
          border: 1px solid $red
          border-radius: 2px
          text-align: center
          line-height: 40px
          margin-top: 5px

          +media-tablet
            font-size: 13px

          +media-mobile
            height: 24px
            line-height: 24px
            font-size: 10px

      button
        height: 40px
        width: 250px
        font-size: 20px
        text-align: center
        border-radius: 5px
        border: none
        color: $red
        cursor: pointer
        transition: all 0.2s ease-in
        margin: 10px auto
        text-transform: uppercase

        &:hover
          background-color: $light-blue

        &:active
          outline-color: $light-blue

    h5
      text-align: start
      font-size: 12px
      line-height: 16px
      width: 700px
      max-width: 80vw
      margin: 0 auto
      user-select: none

      &::before
        content: '*'
        position: relative
        width: 15px
        height: 15px
        color: $light-blue
        left: -3px
        top: 2px
</style>
