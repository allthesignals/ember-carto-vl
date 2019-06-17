import Application from '@ember/application';

import { initialize } from 'dummy/instance-initializers/init-carto-vl-default-auth';
import { module, skip } from 'qunit';
import { run } from '@ember/runloop';

module('Unit | Instance Initializer | init-carto-vl-default-auth', function(hooks) {
  hooks.beforeEach(function() {
    this.TestApplication = Application.extend();
    this.TestApplication.instanceInitializer({
      name: 'initializer under test',
      initialize
    });
    this.application = this.TestApplication.create({ autoboot: false });
    this.instance = this.application.buildInstance();
  });
  hooks.afterEach(function() {
    run(this.instance, 'destroy');
    run(this.application, 'destroy');
  });

  // Replace this with your real tests.
  skip('it works', async function(assert) {
    await this.instance.boot();

    assert.ok(true);
  });
});
