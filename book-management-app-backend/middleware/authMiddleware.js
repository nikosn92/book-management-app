const jwt = require('jsonwebtoken');
const mongoose = require('mongoose');

const requireAuth = (req, res, next) => {
    const token = req.headers.authorization && req.headers.authorization.split(' ')[1];
    if (!token) {
        return res.status(401).json({ error: 'Authorization required' });
    }

    jwt.verify(token, process.env.JWT_SECRET, (err, decodedToken) => {
        if (err) {
            return res.status(401).json({ error: 'Invalid or expired token' });
        }

        req.user = {
            id: new mongoose.Types.ObjectId(decodedToken.id),
            role: decodedToken.role, // Include role from token
        };
        next();
    });
};

const requireAdmin = (req, res, next) => {
    if (req.user && req.user.role === 'admin') {
        next();
    } else {
        res.status(403).json({ error: 'Access denied. Admins only.' });
    }
};

module.exports = { requireAuth, requireAdmin };