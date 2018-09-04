const uuid = require('uuid/v4');

const { Common } = require('./../helper');

const { expect } = require('code');
const lab = require('lab').script();
exports.lab = lab;

const { suite, test } = lab;

suite('[Functionality][Connection]', () => {
  const { sql, mongo, redis } = Common.data;

  test('[mysql] Should insert a user', async () => {
    const { User } = sql;
    const payload = {
      id: uuid()
    };

    await User.create(payload);
    const user = await User.findOne({ where: payload });

    expect(user.id).to.equal(payload.id);
  });

  test('[mongo] Should insert a project', async () => {
    const { Project } = mongo;
    const payload = {
      user_id: uuid()
    };

    await Project.create(payload);
    const project = await Project.findOne(payload);

    expect(project.user_id).to.equal(payload.user_id);
  });

  test('[redis] Should set a bit', async () => {
    const randomID = uuid();
    await redis.setBit(randomID, 1);

    const bit = await redis.getBit(randomID);
    expect(bit).to.equal(1);
  });
});
