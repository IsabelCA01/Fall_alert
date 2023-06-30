const { Router } = require('express');

const router = Router();

const {
    getSensor1Value,
    updateValueSensor1,
    deleteRecordSensor1,
    getSensor1Values,
    getButtonValueSensor,
    getAlarmValueSensor
} = require("../../controllers/server-controller-mongo");

router.get('/sensor', getSensor1Value);
router.get('/sensor/all', getSensor1Values);
router.put('/sensor', updateValueSensor1);
router.delete('/sensor', deleteRecordSensor1);
router.get('/boton', getButtonValueSensor);
router.get('/alarma', getAlarmValueSensor);

module.exports = router;
