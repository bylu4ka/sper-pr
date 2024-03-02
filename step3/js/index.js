"use strict";
document.addEventListener("DOMContentLoaded", function () {
  const DATA = [
    {
      "first name": "Олексій",
      "last name": "Петров",
      photo: "./img/trainers/trainer-m1.jpg",
      specialization: "Басейн",
      category: "майстер",
      experience: "8 років",
      description:
        "Олексій має багаторічний досвід роботи з плавцями. Він займається якісною підготовкою спортсменів на міжнародних змаганнях. Його методика базується на новітніх технологіях тренувань.",
    },
    {
      "first name": "Марина",
      "last name": "Іванова",
      photo: "./img/trainers/trainer-f1.png",
      specialization: "Тренажерний зал",
      category: "спеціаліст",
      experience: "2 роки",
      description:
        "Марина спеціалізується на роботі з ваговими тренажерами. Вона розробила унікальну програму для набору м'язової маси. Її клієнти завжди задоволені результатами.",
    },
    {
      "first name": "Ігор",
      "last name": "Сидоренко",
      photo: "./img/trainers/trainer-m2.jpg",
      specialization: "Дитячий клуб",
      category: "інструктор",
      experience: "1 рік",
      description:
        "Ігор працює з дітьми різного віку. Він створив ігрові методики для розвитку координації та спритності. Його уроки завжди цікаві та корисні для малюків.",
    },
    {
      "first name": "Тетяна",
      "last name": "Мороз",
      photo: "./img/trainers/trainer-f2.jpg",
      specialization: "Бійцівський клуб",
      category: "майстер",
      experience: "10 років",
      description:
        "Тетяна є експертом в бойових мистецтвах. Вона проводить тренування для професіоналів і новачків. Її підхід до навчання допомагає спортсменам досягати високих результатів.",
    },
    {
      "first name": "Сергій",
      "last name": "Коваленко",
      photo: "./img/trainers/trainer-m3.jpg",
      specialization: "Тренажерний зал",
      category: "інструктор",
      experience: "1 рік",
      description:
        "Сергій фокусується на роботі з фітнесом та кардіотренуваннями. Він вдосконалив свої методики протягом багатьох років. Його учні завжди в формі та енергійні.",
    },
    {
      "first name": "Олена",
      "last name": "Лисенко",
      photo: "./img/trainers/trainer-f3.jpg",
      specialization: "Басейн",
      category: "спеціаліст",
      experience: "4 роки",
      description:
        "Олена спеціалізується на синхронному плаванні. Вона тренує команди різного рівня. Її команди завжди займають призові місця на змаганнях.",
    },
    {
      "first name": "Андрій",
      "last name": "Волков",
      photo: "./img/trainers/trainer-m4.jpg",
      specialization: "Бійцівський клуб",
      category: "інструктор",
      experience: "1 рік",
      description:
        "Андрій має досвід у вивченні різних бойових мистецтв. Він викладає техніку та тактику бою. Його учні здобувають перемоги на міжнародних турнірах.",
    },
    {
      "first name": "Наталія",
      "last name": "Романенко",
      photo: "./img/trainers/trainer-f4.jpg",
      specialization: "Дитячий клуб",
      category: "спеціаліст",
      experience: "3 роки",
      description:
        "Наталія розробила унікальну програму для дітей дошкільного віку. Вона допомагає дітям розвивати фізичні та ментальні навички. Її класи завжди веселі та динамічні.",
    },
    {
      "first name": "Віталій",
      "last name": "Козлов",
      photo: "./img/trainers/trainer-m5.jpg",
      specialization: "Тренажерний зал",
      category: "майстер",
      experience: "10 років",
      description:
        "Віталій спеціалізується на функціональному тренуванні. Він розробив ряд ефективних тренувальних програм. Його клієнти швидко досягають бажаних результатів.",
    },
    {
      "first name": "Юлія",
      "last name": "Кравченко",
      photo: "./img/trainers/trainer-f5.jpg",
      specialization: "Басейн",
      category: "спеціаліст",
      experience: "4 роки",
      description:
        "Юлія є експертом у водних видах спорту. Вона проводить тренування з аквагімнастики та аеробіки. Її учні демонструють вражаючі показники на змаганнях.",
    },
    {
      "first name": "Олег",
      "last name": "Мельник",
      photo: "./img/trainers/trainer-m6.jpg",
      specialization: "Бійцівський клуб",
      category: "майстер",
      experience: "12 років",
      description:
        "Олег є визнаним майстром в бойових мистецтвах. Він тренує чемпіонів різних вагових категорій. Його методики вважаються одними з найефективніших у світі бойових мистецтв.",
    },
    {
      "first name": "Лідія",
      "last name": "Попова",
      photo: "./img/trainers/trainer-f6.jpg",
      specialization: "Дитячий клуб",
      category: "інструктор",
      experience: "1 рік",
      description:
        "Лідія має великий досвід у роботі з дітьми. Вона організовує різноманітні спортивні ігри та заняття. Її класи завжди допомагають дітям розвивати соціальні навички та командний дух.",
    },
    {
      "first name": "Роман",
      "last name": "Семенов",
      photo: "./img/trainers/trainer-m7.jpg",
      specialization: "Тренажерний зал",
      category: "спеціаліст",
      experience: "2 роки",
      description:
        "Роман є експертом у кросфіту та функціональних тренуваннях. Він розробив власні програми для різних вікових груп. Його учні часто отримують нагороди на фітнес-турнірах.",
    },
    {
      "first name": "Анастасія",
      "last name": "Гончарова",
      photo: "./img/trainers/trainer-f7.jpg",
      specialization: "Басейн",
      category: "інструктор",
      experience: "1 рік",
      description:
        "Анастасія фокусується на водних програмах для здоров'я та фітнесу. Вона проводить тренування для осіб з різним рівнем підготовки. Її учні відзначають покращення здоров'я та благополуччя після занять.",
    },
    {
      "first name": "Валентин",
      "last name": "Ткаченко",
      photo: "./img/trainers/trainer-m8.jpg",
      specialization: "Бійцівський клуб",
      category: "спеціаліст",
      experience: "2 роки",
      description:
        "Валентин є експертом в таеквондо та кікбоксингу. Він викладає техніку, тактику та стратегію бою. Його учні часто стають чемпіонами на національних та міжнародних змаганнях.",
    },
    {
      "first name": "Лариса",
      "last name": "Петренко",
      photo: "./img/trainers/trainer-f8.jpg",
      specialization: "Дитячий клуб",
      category: "майстер",
      experience: "7 років",
      description:
        "Лариса розробила комплексну програму для розвитку фізичних та інтелектуальних навичок дітей. Вона проводить заняття в ігровій формі. Її методика допомагає дітям стати активними та розумними.",
    },
    {
      "first name": "Олексій",
      "last name": "Петров",
      photo: "./img/trainers/trainer-m9.jpg",
      specialization: "Басейн",
      category: "майстер",
      experience: "11 років",
      description:
        "Олексій має багаторічний досвід роботи з плавцями. Він займається якісною підготовкою спортсменів на міжнародних змаганнях. Його методика базується на новітніх технологіях тренувань.",
    },
    {
      "first name": "Марина",
      "last name": "Іванова",
      photo: "./img/trainers/trainer-f9.jpg",
      specialization: "Тренажерний зал",
      category: "спеціаліст",
      experience: "2 роки",
      description:
        "Марина спеціалізується на роботі з ваговими тренажерами. Вона розробила унікальну програму для набору м'язової маси. Її клієнти завжди задоволені результатами.",
    },
    {
      "first name": "Ігор",
      "last name": "Сидоренко",
      photo: "./img/trainers/trainer-m10.jpg",
      specialization: "Дитячий клуб",
      category: "інструктор",
      experience: "1 рік",
      description:
        "Ігор працює з дітьми різного віку. Він створив ігрові методики для розвитку координації та спритності. Його уроки завжди цікаві та корисні для малюків.",
    },
    {
      "first name": "Наталія",
      "last name": "Бондаренко",
      photo: "./img/trainers/trainer-f10.jpg",
      specialization: "Бійцівський клуб",
      category: "майстер",
      experience: "8 років",
      description:
        "Наталія є майстром у бойових мистецтвах. Вона вивчала різні техніки та стили, із якими працює зі своїми учнями. Її підхід до навчання відповідає найвищим стандартам.",
    },
    {
      "first name": "Андрій",
      "last name": "Семенов",
      photo: "./img/trainers/trainer-m11.jpg",
      specialization: "Тренажерний зал",
      category: "інструктор",
      experience: "1 рік",
      description:
        "Андрій спеціалізується на функціональному тренуванні. Він розробив власну систему вправ для зміцнення корпусу. Його учні завжди отримують видимі результати.",
    },
    {
      "first name": "Софія",
      "last name": "Мельник",
      photo: "./img/trainers/trainer-f11.jpg",
      specialization: "Басейн",
      category: "спеціаліст",
      experience: "6 років",
      description:
        "Софія працює з аквагімнастикою. Вона вивчила різні техніки та стили плавання. Її заняття допомагають клієнтам розслабитися та покращити фізичну форму.",
    },
    {
      "first name": "Дмитро",
      "last name": "Ковальчук",
      photo: "./img/trainers/trainer-m12.png",
      specialization: "Дитячий клуб",
      category: "майстер",
      experience: "10 років",
      description:
        "Дмитро спеціалізується на розвитку дитячого спорту. Він розробив унікальну програму для малюків. Його методики забезпечують гармонійний розвиток дітей.",
    },
    {
      "first name": "Олена",
      "last name": "Ткаченко",
      photo: "./img/trainers/trainer-f12.jpg",
      specialization: "Бійцівський клуб",
      category: "спеціаліст",
      experience: "5 років",
      description:
        "Олена є відомим тренером у жіночому бойовому клубі. Вона вивчила різні техніки самооборони. Її підхід дозволяє її ученицям відчувати себе впевнено в будь-яких ситуаціях.",
    },
  ];

  let trainersContainer = document.querySelector(".trainers-cards__container");
  const trainerCardTemplate = document.getElementById("trainer-card");
  // Функція відображення картки з кнопкою показати
  function displayTrainers(DATA) {
    DATA.forEach((trainer) => {
      const clone = document.importNode(trainerCardTemplate.content, true);
      const trainerName = clone.querySelector(".trainer__name");
      const trainerImg = clone.querySelector(".trainer__img");
      const btnShow = clone.querySelector(".trainer__show-more");
      trainerImg.src = trainer.photo;
      trainerImg.alt = trainer.name;
      trainersContainer.appendChild(clone);
      let name = `${trainer["first name"]} ${trainer["last name"]}`;
      trainerName.textContent = name;
      btnShow.addEventListener("click", () => showModal(trainer));
    });
  }
  displayTrainers(DATA);
  //  Функція модального вікна
  function showModal(trainer) {
    const modalTemplate = document.getElementById("modal-template");
    const cloneModal = document.importNode(modalTemplate.content, true);
    const modalContent = cloneModal.querySelector(".modal");
    const currentTrainer = DATA.find((t) => t.photo === trainer.photo);
    if (currentTrainer) {
      const category = currentTrainer.category;
      modalContent.querySelector(
        ".modal__point--category"
      ).textContent = `Категорія інструктора: ${category}`;
      const experience = currentTrainer.experience;
      modalContent.querySelector(
        ".modal__point--experience"
      ).textContent = `Досвід: ${experience}`;
      modalContent.querySelector(".modal__img").src = trainer.photo;
      modalContent.querySelector(
        ".modal__name"
      ).textContent = `${trainer["first name"]} ${trainer["last name"]}`;
      const specialization = currentTrainer.specialization;
      modalContent.querySelector(
        ".modal__point--specialization"
      ).textContent = `Напрям тренера: ${specialization}`;
      const description = currentTrainer.description;
      modalContent.querySelector(".modal__text").textContent = description;
    }

    const modalCloseButton = modalContent.querySelector(".modal__close");
    modalCloseButton.addEventListener("click", () => {
      modalContent.remove();
      document.body.style.overflow = "auto";
    });

    document.body.appendChild(cloneModal);
    document.body.style.overflow = "hidden";
  }

  // Функція відображення відсортованих карток

  const rmHidSort = document.querySelector(".sorting");
  rmHidSort.removeAttribute("hidden");
  const sortingButtons = document.querySelectorAll(".sorting__btn");

  sortingButtons.forEach(function (sortBtn) {
    sortBtn.addEventListener("click", function () {
      sortingButtons.forEach(function (btn) {
        btn.classList.remove("sorting__btn--active");
      });

      sortBtn.classList.add("sorting__btn--active");
      const tabType = sortBtn.textContent.trim();

      function sortBySurname() {
        let trainersContainer = DATA.slice().sort((a, b) => {
          const lastNameA = a["last name"].toUpperCase();
          const lastNameB = b["last name"].toUpperCase();
          return lastNameA.localeCompare(lastNameB);
        });
        displayTrainers(trainersContainer);
      }

      trainersContainer.innerHTML = "";

      function sortByExperience() {
        const sortedData = DATA.slice().sort((b, a) => {
          const experienceA = parseInt(a.experience);
          const experienceB = parseInt(b.experience);
          return experienceA - experienceB;
        });
        displayTrainers(sortedData);
      }

      if (tabType === "ЗА замовчанням") {
        displayTrainers(DATA);
      } else if (tabType === "ЗА ПРІЗВИЩЕМ") {
        sortBySurname();
      } else if (tabType === "ЗА ДОСВІДОМ") {
        sortByExperience();
      }
      // Збереження при перезавантаженні
      localStorage.setItem("currentTab", tabType);
    });
  });

  const savedTabType = localStorage.getItem("currentTab");
  if (savedTabType) {
    sortingButtons.forEach(function (sortBtn) {
      if (sortBtn.textContent.trim() === savedTabType) {
        sortBtn.click();
      }
    });
  }
  // фільтр

  const sidebar = document.querySelector(".sidebar");
  sidebar.removeAttribute("hidden");

  const filtersForm = document.querySelector(".filters");

  // Визначте масиви для кожного напряму та категорії
  let gym = DATA.filter((item) => item.specialization === "Тренажерний зал");
  let fightClub = DATA.filter(
    (item) => item.specialization === "Бійцівський клуб"
  );
  let kidsKlub = DATA.filter((item) => item.specialization === "Дитячий клуб");
  let swimmingPool = DATA.filter((item) => item.specialization === "Басейн");
  let master = DATA.filter((item) => item.category === "майстер");
  let specialist = DATA.filter((item) => item.category === "спеціаліст");
  let instructor = DATA.filter((item) => item.category === "інструктор");

  // Змінна для збереження відфільтрованих тренерів
  let filteredTrainers = [];

  // Функція відображення відфільтрованих тренерів
  function displayFilteredTrainers() {
    trainersContainer.innerHTML = "";
    displayTrainers(filteredTrainers);
  }

  filtersForm.addEventListener("submit", function (event) {
    event.preventDefault();

    const selectedDirection = document.querySelector(
      'input[name="direction"]:checked'
    ).id;
    const selectedCategory = document.querySelector(
      'input[name="category"]:checked'
    ).id;

    let selectedTrainersDirection = [];

    if (selectedDirection === "all-direction") {
      selectedTrainersDirection = DATA;
    } else if (selectedDirection === "gym") {
      selectedTrainersDirection = gym;
    } else if (selectedDirection === "fight-club") {
      selectedTrainersDirection = fightClub;
    } else if (selectedDirection === "kids-club") {
      selectedTrainersDirection = kidsKlub;
    } else if (selectedDirection === "swimming-pool") {
      selectedTrainersDirection = swimmingPool;
    }
    let selectedTrainersCategory = [];
    if (selectedCategory === "all-category") {
      selectedTrainersCategory = DATA;
    } else if (selectedCategory === "master") {
      selectedTrainersCategory = master;
    } else if (selectedCategory === "specialist") {
      selectedTrainersCategory = specialist;
    } else if (selectedCategory === "instructor") {
      selectedTrainersCategory = instructor;
    }
    filteredTrainers = selectedTrainersDirection.filter((trainer) =>
      selectedTrainersCategory.includes(trainer)
    );
    displayFilteredTrainers();
  });
});
