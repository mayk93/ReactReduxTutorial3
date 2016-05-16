/**
 * Created by Michael on 16/05/16.
 */

import React, { Component } from 'react';

export default class SearchBar extends Component {
    render() {
        return (
          <form className="input-group">
              <input/>
              <span className="input-group-btn">
                  <button type="submit" className="btn btn-secondary">Submit</button>
              </span>
          </form>
        );
    }
}