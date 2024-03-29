    function getRating(rating) {
        let res = "";
        let star_count = 0;
        let full_star = parseInt(rating);
        let rest_star = rating - full_star;
        star_count = full_star;
        res = Array(full_star)
          .fill("<img src='../images/card_img/full_star.svg'>")
          .join("");
        if (0.25 <= rest_star && rest_star <= 0.5) {
          star_count++;
          res += "<img src='../images/card_img/empty.svg'>";
        }
        if (0.5 < rest_star) {
          star_count++;
          res += "<img src='<img src='../images/card_img/half_star.svg'>";
        }
        free_star = 5 - star_count;
        res += Array(free_star)
          .fill("<img src='../images/card_img/empty.svg'>")
          .join("");
        return res;
      }