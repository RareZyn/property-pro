const router = require('express').Router();
let Forum = require('../models/forum.model');

// Get all forums
router.route('/').get(async (req, res) => {
    try {
        const forums = await Forum.find().populate('userID');
        res.json(forums);
    } catch (err) {
        res.status(400).json('Error: ' + err);
    }
});

// Search forums based on textForum value
router.route('/search').get(async (req, res) => {
    const searchQuery = req.query.q; // Get the search term from query parameters

    if (!searchQuery) {
        return res.status(400).json({ error: 'Search term is required' });
    }

    try {
        const regex = new RegExp(searchQuery, 'i');
        const forums = await Forum.find({ textForum: { $regex: regex } });
        res.json(forums);
    } catch (err) {
        res.status(400).json('Error: ' + err);
    }
});

// Create new forum
router.route('/create').post(async (req, res) => {
    try {
        const forum = await Forum.create(req.body);
        res.json(forum);
    } catch (err) {
        res.status(400).json(err);
    }
});

// Get a specific forum by ID
router.route('/:id').get((req, res) => {
    Forum.findById(req.params.id)
        .then(forum => res.json(forum))
        .catch(err => res.status(400).json('Error: ' + err));
});

// Update a specific forum by ID
router.route('/update/:id').put((req, res) => {
    Forum.findById(req.params.id)
        .then(forum => {
            // update forum fields
            forum.userID = req.body.userID;
            forum.textForum = req.body.textForum;
            forum.comments = req.body.comments;
            forum.likes = req.body.likes;
            forum.likeCount = req.body.likeCount;
            forum.photoUrl = req.body.photoUrl;
            forum.videoUrl = req.body.videoUrl;

            forum.save()
                .then(() => res.json('Forum updated!'))
                .catch(err => res.status(400).json('Error: ' + err));
        })
        .catch(err => res.status(400).json('Error: ' + err));
});

// Add a new comment to id
router.route('/add-comment/:id').post((req, res) => {
    const comment = new Forum(req.body);
    comment.save()
    .then(() => {
        Forum.findByIdAndUpdate(req.params.id, { $push: { comments: comment } })
            .then(() => res.json('Comment added!'))
            .catch(err => res.status(400).json('Error: ' + err));
    })
    .catch(err => res.status(400).json('Error: ' + err));
});

// Delete a specific forum by ID
router.route('/delete/:id').delete((req, res) => {
    Forum.findByIdAndDelete(req.params.id)
        .then(() => res.json('Forum deleted.'))
        .catch(err => res.status(400).json('Error: ' + err));
});

// Like or unlike by ID
router.route('/like/:id').post((req, res) => {
    const like = req.body.userID;

    // Check if the user has already liked this post
    Forum.findById(req.params.id) //Find the forum ID given in the params
        .then((forumPost) => {
            const existingLike = forumPost.likes.find((likeItem) => likeItem === req.body.userID);

            if (existingLike) {
                // User has already liked this post, so remove the like
                forumPost.likes.pull(existingLike); // Remove the like from the array
                forumPost.likeCount -= 1; // Decrement the likeCount
            } else {
                // User hasn't liked this post, so add the like
                forumPost.likes.push(like); // Add the like to the array
                forumPost.likeCount += 1; // Increment the likeCount
            }

            forumPost.save()
                .then(() => res.json('Like updated!'))
                .catch((err) => res.status(400).json('Error: ' + err));
        })
        .catch((err) => res.status(400).json('Error: ' + err));
});

router.route('/user-forum/:id').get((req, res) =>{
    const userId = req.params.id 
    Forum.find({ userID: userId })
        .then(forums => res.json(forums))
        .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/get-like/:id').get((req,res)=>{
    Forum.findById(req.params.id)
    .then(forum => res.json(forum.likes))
    .catch(err => res.status(400).json('Error ' + err));
});

router.route('/get-comment/:id').get((req,res)=>{
    Forum.findById(req.params.id)
        .then(forum => res.json(forum.comments))
        .catch(err => res.status(400).json('Error ' + err));
});

router.route('/delete-comment/:id').post((req,res)=>{
    Forum.findById(req.params.id)
        .then((forum) => {
            const existingComment = forum.comments.find(comment => comment._id.toString() === req.body.forumID);

            if(existingComment){
                forum.comments.pull(existingComment); // Remove the comment from the array
                Forum.findByIdAndDelete(req.body.forumID)
                    .then(() => res.json('Forum deleted.'))
                    .catch(err => res.status(400).json('Error: ' + err));
                forum.save()
                .then(() => res.json('Comment deleted !'))
                .catch(err => res.status(400).json('Error '+err));
            } else {
                res.status(404).json('Comment not found.');
            }
        })
        .catch(err => res.status(400).json('Error '+err));
});

module.exports = router;