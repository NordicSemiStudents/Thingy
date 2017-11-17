/**
 * @license
 * Visual Blocks Editor
 *
 * Copyright 2012 Google Inc.
 * https://blockly.googlecode.com/
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

/**
 * @fileoverview Logic blocks for Blockly.
 * @author q.neutron@gmail.com (Quynh Neutron)
 */
'use strict';

goog.provide('Blockly.Blocks.thingy');

goog.require('Blockly.Blocks');

Blockly.Blocks['controls_lightOn'] = {
  /**
   * Block for turning on LED
   * @this Blockly.Block
   */
   init:function() {
      this.appendDummyInput()
        .appendField("Light on");
      this.setColour(180);
    }
};

Blockly.Blocks['controls_lightOff'] = {
  /**
   * Block for turning off LED
   * @this Blockly.Block
   */
   init:function() {
      this.appendDummyInput()
        .appendField("Light off");
      this.setColour(75);
    }
}
