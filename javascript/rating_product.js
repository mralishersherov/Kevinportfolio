function getRating(rating) {
    let res = "";
    let star = 0;
    let ful_star = parseInt(rating);
    let res_star = rating - ful_star;
    star = ful_star;
    res = Array(ful_star)
        .fill("<img src='../images/card_img/full_star.svg'>")
        .join("");
        if (0.25 <= res_star && res_star <= 0.5) {
            star++;
            res += "<img src='../images/card_img/empty.svg'>"
        }
        if (0.5 < res_star) {
            star++;
            res = + "<img src='../images/card_img/half_star.svg'>"
        }
        res_star = 5 - star;
        res += Array(res_star)
        .fill("<img src='../images/card_img/empty.svg'>")
        .join("");
        return res;
    }

