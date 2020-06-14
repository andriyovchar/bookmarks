import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {FormBuilder} from "@angular/forms";
import {IGroup} from "../../models/group.interface";
import {IBookmark} from "../../models/bookmark.interface";

@Component({
  selector: 'app-create-bookmark',
  templateUrl: './create-bookmark.component.html',
  styleUrls: ['./create-bookmark.component.scss']
})
export class CreateBookmarkComponent implements OnInit {

  @Input()
  groups: IGroup[];
  @Output()
  bookmark: EventEmitter<IBookmark> = new EventEmitter();
  form: any;

  constructor(private formBuilder: FormBuilder) {
  }

  ngOnInit(): void {
    this.form = this.formBuilder.group({
      name: '',
      url: '',
      groupId: ''
    });
  }

  saveForm() {
    this.bookmark.emit(this.form.value);
  }

}
