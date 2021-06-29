const db = require('./conn.js');

class Reviews {
    constructor(id, park_id, review_content, score) {
        this.id = id;
        this.park_id = park_id;
        this.review_content = review_content;
        this.score = score;
    }

    async getParkReviews() {
        try {
            const query = `SELECT * FROM reviews WHERE park_id = ${this.park_id}`;
            const response = await db.any(query);
            return response;
        } catch (err) {
            return err.message;
        }
    }

    async addReview() {
         try {
             const query = `INSERT INTO reviews (score, content, park_id, user_id) VALUES (${this.score}, '${this.review_content}', ${this.park_id}, 9)`;
             const response = await db.result(query);
             console.log("response", response);
             return response;
         } catch (err) {
             return err.message;
         }
    }
}

module.exports = Reviews;
